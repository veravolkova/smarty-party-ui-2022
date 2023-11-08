const storageKey = "loggedGiftAppUser";

Cypress.Commands.add("reset_db", () => {
  cy.request("POST", "http://localhost:3001/api/testing/reset");
});


Cypress.Commands.add("login_and_visit", ( username, password ) => {
  cy.request("POST", "http://localhost:3001/api/login", {
    username,
    password,
  }).then(({ body }) => {
    localStorage.setItem(storageKey, JSON.stringify(body));
    cy.visit("http://localhost:3000");
  });
});


Cypress.Commands.add("login", ( username, password ) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});


Cypress.Commands.add("create_user", (user) => {
  cy.request("POST", "http://localhost:3001/api/users/", user);
});


Cypress.Commands.add("create_gift", ( name, description, url ) => {
  cy.contains("Suggest").click();
  cy.get("#name").type(name, { force: true });
  cy.get("#description").type(description, { force: true });
  cy.get("#url").type(url, { force: true });
  cy.contains("save").click();
});


