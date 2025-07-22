describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach('visit', () => {
    cy.visit('./src/index.html');
  })

  it('Verify title', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  })

  it('Fill out and submit', () => {
    cy.clock();

    cy.fillMandatoryFields();
    cy.contains('button', 'Enviar').click();

    cy.get('.success').should('be.visible');
  
    cy.tick(3000);

    cy.get('.success').should('not.be.visible');
  })

  it('Error message when incorrect email', () => {
    cy.fillMandatoryFields();
    cy.get('#email').clear().type('nome.sobrenome');
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  })

  it('Fill phone with not numeric caracters', () => {
    cy.get('#phone').type('AaBbCc$!');

    cy.get('#phone').should('have.value', '');
  })
  it('Error message when obrigatory phone is not filled', () => {
    cy.fillMandatoryFields();
    cy.get('#phone').clear();
    cy.get('#phone-checkbox').check();
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  })

  it('Fill and empty name, lastname, mail and phone', () => {
    cy.fillMandatoryFields();

    cy.get('#firstName').should('have.value', 'Nome');
    cy.get('#lastName').should('have.value', 'Sobrenome');
    cy.get('#email').should('have.value', 'nome.sobrenome@email.com');
    cy.get('#phone').should('have.value', '489999999');
    cy.get('#firstName')
      .clear()
      .should('have.value', '');
    cy.get('#lastName')
      .clear()
      .should('have.value', '');
    cy.get('#email')
      .clear()
      .should('have.value', '');
    cy.get('#phone')
      .clear()
      .should('have.value', '');
  })

  it('Error message when nothing is filled', () => {
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  })

  it('Fill out and submit using custom command', () => {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get('.success').should('be.visible');
  })

  it('Fill out and submit using custom command', () => {
    const data = {
      firstName: 'Marina',
      lastName: 'Larissa',
      phone: '489999999',
      mail: 'marina_teste@gmail.com.br',
      text: 'Teste(...)'
    }
    cy.fillMandatoryFields();
    cy.contains('button', 'Enviar').click();
    cy.get('.success').should('be.visible');
  })

  it('select a product (YouTube) by text', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube');
  })

  it('select a product (Mentoria) by value', () => {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria');
  })

  it('select a product (Blog) by index', () => {
    cy.get('#product').select(1).should('have.value', 'blog');
  })

  it('checks type Feedback', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('have.value', 'feedback')
      .should('be.checked');
  })

  it('checks each type', () => {
    cy.get('input[type="radio"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked');
      }
      );
  })

  it('checks both checkbox and uncheck the last one', () => {
    cy.get('input[type="checkbox"]')
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      });
    cy.get('input[type="checkbox"]')
      .last()
      .uncheck()
      .should('not.be.checked');
  })

  it('select a file from fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      });
  })

  it('select a file simulating drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      });
  })

  it('select a file where fixture has an alias', () => {
    cy.fixture('example.json').as('sampleFile');
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      });
  })

  it('link opening in another tab', () => {
    cy.get('a')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html');
  })

  it('link opening in the same tab with invoke', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click();

    cy.url().should('include', 'privacy.html');
  })

  it('privacy page tests', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click();

    cy.get('#white-background').should('be.visible');
    cy.title().should('include', 'Política de Privacidade');
  })
})
