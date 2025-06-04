const longText = Cypress._.repeat('blahblah3blahblah2',12);

Cypress.Commands.add('fillMandatoryFields', (data = {
    firstName : 'Nome', 
    lastName : 'Sobrenome',
    mail : 'nome.sobrenome@email.com',
    phone : '489999999',
    text : longText
}) =>{
    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#email').type(data.mail);
    cy.get('#phone').type(data.phone);
    cy.get('#open-text-area').type(data.text, { delay : 0});
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    cy.fillMandatoryFields();
    cy.contains('button','Enviar').click();
})