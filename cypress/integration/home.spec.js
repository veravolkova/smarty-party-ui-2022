import common from "../../src/utils/common";

describe("home page", function () {
  before(function () {
    cy.reset_db();

    const user = {
      name: "Vera Popova",
      username: "veravolkova",
      password: "Salainen"
    };

    cy.create_user(user);
    cy.login_and_visit("veravolkova", "Salainen");
  });

  it("home page contains the needed elements", function () {
    const year = common.getCurrentYear();
    const brthDate = "Liza's Birthday 26.02." + year;
    const footerText = "Smarty Party App, Vera Popova " + year;
    const buttons = ["home", "gifts", "guests", "logout"];

    cy.get("#mainTitle").should("contain", brthDate);
    cy.get("p").should("contain", footerText);
    buttons.forEach(function (value) {
      cy.get("a").should("contain", value);
    });
  });
});