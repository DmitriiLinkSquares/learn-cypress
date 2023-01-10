import { formLayoutsPage1 } from '../pages/formLayoutsPage';

export class FormLayoutsHelpers {
  submitInLineFormWithNameAndEmail(name, email) {
    // formLayoutsPage1.inlineFormField.then((form) => {
    //   cy.wrap(form).find('[placeholder="Jane Doe"]').type(name);
    //   cy.wrap(form).find('[placeholder="Email"]').type(email);
    //   cy.wrap(form).find('[type="checkbox"]').check({ force: true });
    //   cy.wrap(form).submit(); // submit() may be used only after forms tags
    // });
    formLayoutsPage1.inlineFormNameField.type(name);
    formLayoutsPage1.inlineFormEmailField.type(email);
    formLayoutsPage1.inlineFormCheckBox.check({ force: true });
    formLayoutsPage1.inlineFormField.submit();
  }
  submitBasicFormWithEmailAndPassword(email, password) {
    formLayoutsPage1.basicFormEmailField.type(email);
    formLayoutsPage1.basicFormPasswordField.type(password);
    formLayoutsPage1.basicFormCheckBox.check({ force: true });
    formLayoutsPage1.basicFormField.submit();
  }
}

export const onFormLayoutsPage = new FormLayoutsHelpers();
