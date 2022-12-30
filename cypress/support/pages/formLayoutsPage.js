export class FormLayoutsPage {
  get inlineFormField() {
    return cy.contains('nb-card', 'Inline form').find('form');
  }
  get inlineFormNameField() {
    return this.inlineFormField.find('[placeholder="Jane Doe"]');
  }
  get inlineFormEmailField() {
    return this.inlineFormField.find('[placeholder="Email"]');
  }
  get inlineFormCheckBox() {
    return this.inlineFormField.find('[type="checkbox"]');
  }
  get basicFormField() {
    return cy.contains('nb-card', 'Basic form').find('form');
  }
  get basicFormEmailField() {
    return this.basicFormField.find('[placeholder="Email"]');
  }
  get basicFormPasswordField() {
    return this.basicFormField.find('[placeholder="Password"]');
  }
  get basicFormCheckBox() {
    return this.basicFormField.find('[type="checkbox"]');
  }
}

export const formLayoutsPage1 = new FormLayoutsPage();
