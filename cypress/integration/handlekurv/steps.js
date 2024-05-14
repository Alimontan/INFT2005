import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^at jeg har åpnet nettkiosken$/, () => {
    cy.visit('http://localhost:8080');
});

When(/^jeg legger inn varer og kvanta$/, () => {
    cy.get('#product').select('Hubba bubba');
    cy.get('#quantity').clear().type('4');
    cy.get('#saveItem').click();

    cy.get('#product').select('Smørbukk');
    cy.get('#quantity').clear().type('5');
    cy.get('#saveItem').click();

    cy.get('#product').select('Stratos');
    cy.get('#quantity').clear().type('1');
    cy.get('#saveItem').click();

    cy.get('#product').select('Hobby');
    cy.get('#quantity').clear().type('2');
    cy.get('#saveItem').click();
});

Then(/^skal handlekurven inneholde det jeg har lagt inn$/, () => {
    cy.get('#cart').find('.cart-item').should('have.length', 4);
    cy.get('#cart').find('.cart-item').eq(0).should('contain', 'Hubba bubba').and('contain', '4');
    cy.get('#cart').find('.cart-item').eq(1).should('contain', 'Smørbukk').and('contain', '5');
    cy.get('#cart').find('.cart-item').eq(2).should('contain', 'Stratos').and('contain', '1');
    cy.get('#cart').find('.cart-item').eq(3).should('contain', 'Hobby').and('contain', '2');
});


And(/^den skal ha riktig totalpris$/, function () {
        cy.get('#price').should('have.text', '33');
});

When('jeg sletter varer', () => {
    cy.get('#cart-item-Smørbukk .delete-button').click();
  });
  
  Then('skal ikke handlekurven inneholde det jeg har slettet', () => {
    cy.get('#cart').should('not.contain', 'Smørbukk');
  });

  When('jeg oppdaterer kvanta for en vare', () => {
    
    cy.get('#cart-item-Stratos #quantity').clear().type('3');
    cy.get('#cart-item-Stratos #updateQuantity').click();
  });
  
  Then('skal handlekurven inneholde riktig kvanta for varen', () => {
    cy.get('#cart-item-Stratos').should('contain', '3');
  });



  Given('jeg er på betalingssiden', () => {
    cy.visit('http://localhost:8080/betaling');
  });
  
  When('jeg legger inn gyldig navn, adresse, postnummer, poststed, og kortnummer', () => {
    cy.get('#name').type('Ola Nordmann');
    cy.get('#address').type('Storgata 1, 0155 Oslo');
    cy.get('#postcode').type('0155');
    cy.get('#postArea').type('Oslo');
    cy.get('#cardNumber').type('4111111111111111');
  });
  
  When('jeg legger inn ugyldige verdier i feltene'), () => {
    cy.get('#name').type('');
    cy.get('#address').type('');
    cy.get('#postcode').type('');
    cy.get('#postArea').type('');
    cy.get('#cardNumber').type('123');
  
  Then('skal jeg få feilmeldinger for disse', () => {
    cy.get('#nameError').should('contain', 'Navn er påkrevd');
    cy.get('#addressError').should('contain', 'Adresse er påkrevd');
    cy.get('#postcodeError').should('contain', 'Postkode er påkrevd');
    cy.get('#postAreaError').should('contain', 'Poststed er påkrevd');
    cy.get('#cardNumberError').should('contain', 'Ugyldig kortnummer');
  });
}