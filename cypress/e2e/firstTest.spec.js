/// <reference types="cypress" />

// const { describe, it } = require('node:test');

describe('Our first suite', () => {
  it('The first test', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    // get() is a basic method to get any web element
    // by Tag Name
    cy.get('input');

    // by ID
    cy.get('#inputEmail1'); // we add a harsh sign to tell cypress that we look for Id and not for value

    // by Class name
    cy.get('.input-full-width'); // we put dot infront of name to tell that it is a class name

    // by Attribute name
    cy.get('[placeholder]'); // we put name inside of a square brackets to look for attribute name

    // by Attribute name and value
    cy.get('[placeholder="Email"]');

    // by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by Tag name and aTTRIBUTE WITH VALUE
    cy.get('input[placeholder="Email"]');

    // by two different attributes
    cy.get('[placeholder="Email"][type="email"]'); // to add second parameter use square brackets

    // by Tag name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    // The most recommended way by Cypress is to craete your own attribute
    cy.get('[data-cy="imputEmail1"]');
  });
});
