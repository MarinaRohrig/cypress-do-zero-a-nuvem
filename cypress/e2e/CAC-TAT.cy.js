describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach('visit', () => {
    cy.visit('./src/index.html');
  })

  it('Verify title', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  })

  it('Fill out and submit', () =>{
    cy.fillMandatoryFields();
    cy.contains('button','Enviar').click();

    cy.get('.success').should('be.visible');
  })

  it('Error message when incorrect email', () =>{
    cy.fillMandatoryFields();
    cy.get('#email').clear().type('nome.sobrenome');
    cy.contains('button','Enviar').click();

    cy.get('.error').should('be.visible');
  })

  it('Fill phone with not numeric caracters', () =>{
    cy.get('#phone').type('AaBbCc$!');

    cy.get('#phone').should('have.value','');
  })
  it('Error message when obrigatory phone is not filled', () => {
    cy.fillMandatoryFields();
    cy.get('#phone').clear();
    cy.get('#phone-checkbox').check();
    cy.contains('button','Enviar').click();

    cy.get('.error').should('be.visible');
  })

  it('Fill and empty name, lastname, mail and phone', () => {
    cy.fillMandatoryFields();

    cy.get('#firstName').should('have.value','Nome');
    cy.get('#lastName').should('have.value','Sobrenome');
    cy.get('#email').should('have.value','nome.sobrenome@email.com');
    cy.get('#phone').should('have.value','489999999');
    cy.get('#firstName')
      .clear()
      .should('have.value','');
    cy.get('#lastName')
      .clear()
      .should('have.value','');
    cy.get('#email')
      .clear()
      .should('have.value','');
    cy.get('#phone')
      .clear()
      .should('have.value','');
  })

  it('Error message when nothing is filled', () => {
    cy.contains('button','Enviar').click();
    
    cy.get('.error').should('be.visible');
  })

  
  it('Fill out and submit using custom command', () =>{
    cy.fillMandatoryFieldsAndSubmit();

    cy.get('.success').should('be.visible');
  })

  it('Fill out and submit using custom command', () =>{
    const data = {
        firstName : 'Marina',
        lastName : 'Larissa',
        phone : '489999999',
        mail : 'marina_teste@gmail.com.br',
        text : 'Teste(...)'
    }
    cy.fillMandatoryFields();
    cy.contains('button','Enviar').click();
    cy.get('.success').should('be.visible');
  })
  
})