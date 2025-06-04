// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFields', () =>{
    const longText = Cypress._.repeat('blahblah3blahblah2',12);
    cy.get('#firstName').type('Nome');
    cy.get('#lastName').type('Sobrenome');
    cy.get('#email').type('nome.sobrenome@email.com');
    cy.get('#phone').type('489999999');
    cy.get('#email-checkbox').check();
    cy.get('#open-text-area').type(longText, { delay : 0});
})