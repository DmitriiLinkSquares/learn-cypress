export class DatepickerPage {
  calendarNavigation() {
    return cy.get('nb-calendar-navigation');
  }
}
export const datepickerPage = new DatepickerPage();
