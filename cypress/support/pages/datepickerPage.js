export class DatepickerPage {
  get calendarNavigation() {
    return cy.get('nb-calendar-navigation');
  }
  get chevronRight() {
    return cy.get('[data-name="chevron-right"]');
  }
  get calendraDayPicker() {
    return cy.get('nb-calendar-day-picker .ng-star-inserted');
  }
  get commonDatepickerInputField() {
    return cy.contains('nb-card', 'Common Datepicker').find('input');
  }
  get DatepickerWithRangeInputField() {
    return cy.contains('nb-card', 'Datepicker With Range').find('input');
  }
}
export const datepickerPage1 = new DatepickerPage();
