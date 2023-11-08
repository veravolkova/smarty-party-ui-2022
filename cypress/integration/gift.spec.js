
// gifts page

describe("gifts page", function () {
  before(function () {
    cy.reset_db();
    const user = {
      name: "Vera Popova",
      username: "veravolkova",
      password: "Salainen"
    };
    cy.create_user(user);
    cy.visit("http://localhost:3000/gifts");
    cy.login("veravolkova", "Salainen");
  });

  it("a new gift can be created", function () {
    cy.create_gift(
      "New Gift",
      "Gift created by Cypress",
      "https://www.cypress.io/"
    );

    cy.get("a[href*=\"gifts/\"]").should("have.text", "New Gift");
  });

  it("a gift can be released", function () {
    cy.contains("release").click();
    cy.contains("reserve").should("exist");
    cy.get("table").contains("Vera Popova").should("not.exist");
  });

  it("a gift can be reserved", function () {
    cy.contains("reserve").click();
    cy.contains("release").should("exist");
    cy.get("table").contains("Vera Popova").should("exist");
  });

  it("gifts can be filtered", function () {
    // release an existing gift
    cy.contains("release").click();

    // create more gifts
    for (let i = 1; i <= 2; i += 1) {

      cy.create_gift(
        "New Gift" + i,
        "Gift created by Cypress",
        "https://www.cypress.io/"
      );

    }

    // check gifts number per tab

    // all tab
    cy.get("table tr").should("have.length", 3);

    // reserved by me tab
    cy.get("[aria-label=\"availability\"]").contains("Reserved").click();
    cy.get("table tr").should("have.length", 2);

    // available tab
    cy.get("[aria-label=\"availability\"]").contains("Available").click();
    cy.get("table tr").should("have.length", 1);
  });
});


// gift reservation, multiuser

describe("gifts page, reserve functionality 2 users", function () {
  // second user logins
  before(function () {
    const secondUser = {
      name: "Tamara Salainen",
      username: "tamarasalainen",
      password: "Salainen"
    };
    cy.create_user(secondUser);

    cy.visit("http://localhost:3000/gifts");
    cy.login("tamarasalainen", "Salainen");
  });

  it("a gift can be reserved (0 users)", function () {
    cy.contains("reserve").eq(0).click();
    cy.get("tr:contains(\"Tamara Salainen\")").should("have.length", 1);
    cy.contains("release").should("have.length", 1);
  });

  it("a gift can be reserved (1 user)", function () {
    cy.contains("reserve").eq(0).click();
    cy.get("tr:contains(\"Tamara Salainen\")").should("have.length", 2);
    cy.get("button:contains(\"release\")").should("have.length", 2);
  });

  // 0 user case is covered in the previous describe
  it("a gift can be released (1 user)", function () {
    cy.get("button:contains(\"release\")").eq(0).click();
    cy.get("tr:contains(\"Tamara Salainen\")").should("have.length", 1);
    cy.get("button:contains(\"release\")").should("have.length", 1);
  });

  it("a gift can be removed by sole owner", function () {
    cy.contains("reserve").eq(0).click();
    cy.get("button:contains(\"Remove\")").as("removeBtn").click();
    cy.get("tr").should("have.length", 2);
    cy.get("@removeBtn").should("not.exist");
  });

  it("a gift can't be removed if not a sole owner", function () {
    cy.get("tr:contains(\"Tamara Salainen\")").should("have.length", 1);
    cy.get("button:contains(\"Remove\")").should("not.exist");
  });

});


