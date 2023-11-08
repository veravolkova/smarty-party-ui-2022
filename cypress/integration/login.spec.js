
describe("login form", function () {
  beforeEach(function () {
    cy.reset_db();
    const user = {
      name: "Vera Popova",
      username: "veravolkova",
      password: "Salainen"
    };
    cy.create_user(user);
    cy.visit("http://localhost:3000");
  });

  it("login form can be opened", function () {
    cy.get("h2").should("contain", "Login");
  });

  it("login form contains all the needed elements", function () {
    cy.contains("username").should("exist");
    cy.contains("password").should("exist");
    cy.get("#login-button").should("exist");
  });

  it("login fails with wrong password", function () {
    cy.login("veravolkova", "wrong");

    cy.get("#alert")
      .should("contain", "wrong username/password")
      .and("have.css", "color", "rgb(102, 9, 27)")
      .and("have.css", "border-style", "solid");
  });

  it("user can log in", function () {
    cy.login("veravolkova", "Salainen").wait(100);
    cy.get("#alert")
      .should("contain", "Welcome, Vera Popova")
      .and("have.css", "color", "rgb(30, 70, 32)")
      .and("have.css", "border-style", "solid");
  });
});
