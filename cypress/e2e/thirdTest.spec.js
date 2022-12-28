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

  it('Then and wrap methods', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.contains('nb-card', 'Using the Grid')
      .find('[for="inputEmail1"]')
      .should('contain', 'Email');

    cy.contains('nb-card', 'Using the Grid')
      .find('[for="inputPassword2"]')
      .should('contain', 'Password');

    cy.contains('nb-card', 'Basic form')
      .find('[for="exampleInputEmail1"]')
      .should('contain', 'Email');

    cy.contains('nb-card', 'Basic form')
      .find('[for="exampleInputPassword1"]')
      .should('contain', 'Password');

    // Extraction of the repeated locator

    // SELENIUM style
    // const firstForm = cy.contains('nb-card', 'Basic form')
    // firstForm.find('[for="exampleInputPassword1"]')
    // firstForm.should('contain', 'Password')

    // CYPRESS style
    cy.contains('nb-card', 'Using the Grid').then((firstForm) => {
      // we can save values because it is of JQuery format, not Cypress
      // in Cypress we can not save values as veriables
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm
        .find('[for="inputPassword2"]')
        .text();
      expect(emailLabelFirst).to.equal('Email');
      expect(passwordLabelFirst).to.equal('Password');

      cy.contains('nb-card', 'Basic form').then((secondForm) => {
        const passwordLabelSecond = secondForm
          .find('[for="exampleInputPassword1"]')
          .text();
        expect(passwordLabelFirst).to.equal(passwordLabelSecond);

        // to convert JQuery back to Cypress
        cy.wrap(secondForm)
          .find('[for="exampleInputPassword1"]')
          .should('contain', 'Password');
      });
    });
  });

  it('Invoke command', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // 1. to get text value
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');

    // 2. to get text value using then()
    cy.get('[for="exampleInputEmail1"]').then((inputLabel) => {
      expect(inputLabel.text()).to.equal('Email address');
    });

    // 3. to get text value using invoke command
    cy.get('[for="exampleInputEmail1"]')
      .invoke('text')
      .then((text) => {
        expect(text).to.equal('Email address');
      });

    // to verify that checkbox is actually checked
    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      //.should('contain', 'checked')
      .then((classValue) => {
        expect(classValue).to.contain('checked');
      });
  });
  it('Assert property', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Datepicker').click();

    cy.contains('nb-card', 'Common Datepicker')
      .find('input')
      .then((input) => {
        cy.wrap(input).click();
        cy.get('nb-calendar-day-picker').contains('17').click();
        cy.wrap(input)
          .invoke('prop', 'value')
          .should('contain', 'Dec 17, 2022');
      });
  });
  it('Radio button1', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.contains('nb-card', 'Using the Grid')
      .find('[type="radio"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons)
          .first()
          .check({ force: true })
          .should('be.checked');

        cy.wrap(radioButtons).eq(1).check({ force: true }).should('be.checked');
        cy.wrap(radioButtons).first().should('not.be.checked');

        cy.wrap(radioButtons).eq(2).should('be.disabled');
      });
  });
  it('Radio button2', () => {
    // in order to open our app in cy we need to execute command
    cy.visit('/');
    cy.contains('Modal & Overlays').click();
    cy.contains('Toastr').click();

    // cy.get('[type="checkbox"]').check({ force: true });
    cy.get('[type="checkbox"]').eq(0).click({ force: true });
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
  });
  it('Lists and dropdowns', () => {
    cy.visit('/');
    // 1 way
    // cy.get('nav nb-select').click();
    // cy.get('.options-list').contains('Dark').click();
    // cy.get('nav nb-select').should('contain', 'Dark');
    // cy.get('nb-layout-header nav').should(
    //   'have.css',
    //   'background-color',
    //   'rgb(34, 43, 69)'
    // );

    // 2 way
    cy.get('nav nb-select').then((dropdown) => {
      cy.wrap(dropdown).click();
      cy.get('.options-list nb-option').each((option, index) => {
        const itemText = option.text().trim();

        const colors = {
          Light: 'rgb(255, 255, 255)',
          Dark: 'rgb(34, 43, 69)',
          Cosmic: 'rgb(50, 50, 89)',
          Corporate: 'rgb(255, 255, 255)',
        };

        cy.wrap(option).click();
        cy.wrap(dropdown).should('contain', itemText);
        cy.get('nb-layout-header nav').should(
          'have.css',
          'background-color',
          colors[itemText]
        );
        if (index < 3) {
          cy.wrap(dropdown).click();
        }
      });
    });
  });
  it.only('Web tables', () => {
    cy.visit('/');
    cy.contains('Tables & Data').click();
    cy.contains('Smart Table').click();
    cy.get('tbody')
      .contains('tr', 'Larry')
      .then((tableRow) => {
        cy.wrap(tableRow).find('.nb-edit').click();
        cy.wrap(tableRow).find('[placeholder="Age"]').type('25');
        cy.wrap(tableRow).find('.nb-checkmark').click();
        cy.wrap(tableRow).find('tb').eq(6).should('contain');
      });
  });
});
