import { onDatepickerPage } from '../support/page_objects/datepickerPage';
import { onFormLayoutsPage } from '../support/page_objects/formLayoutsPage';
import { navigateTo } from '../support/page_objects/navigationPage';
import { onSmartTablePage } from '../support/page_objects/smartTablePage';

describe('Test with Page Objects', () => {
  beforeEach('open application', () => {
    cy.visit('/');
  });
  it('Verify navigation across the pages', () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.toastrPage();
    navigateTo.tablesPage();
    navigateTo.tooltipPage();
  });

  it('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInLineFormWithNameAndEmail(
      'Artem',
      'test@test.com'
    );
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword(
      'test@test.com',
      'password'
    );
    navigateTo.datepickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(3);
    onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14);
  });

  it.only('Add a New Record and Update Age by First Name Then Delete a Record', () => {
    navigateTo.tablesPage();
    onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'Bondar');
    onSmartTablePage.updateAgeByFirstName('Artem', 33);
    onSmartTablePage.deleteRowByIndex(1);
  });
});
