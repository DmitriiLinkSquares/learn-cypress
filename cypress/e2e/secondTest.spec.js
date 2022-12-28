/// <reference types="cypress" />

describe('The second test suite', () => {
  it('The second test', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // want to locate 'SIGN IN' button with our own locator (it is possible to do locally)
    cy.get('[data-cy="signInButton"]');

    // find the first SIGN IN button with contains()
    cy.contains('Sign in'); // it will find and return the first match

    // find the second SIGN IN button with contains()
    cy.contains('[status="warning"]', 'Sign in');

    // to find element with NO unique identifiers

    cy.get('#inputEmail3') // is a key element
      .parents('form') // it's only to locate parent element from the key element
      .find('button') // it's only to find child element form parent element
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click();

    cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
  });
});
