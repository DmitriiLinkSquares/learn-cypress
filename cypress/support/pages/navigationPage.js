export class NavigationPage {
  groupMenuItem(groupName) {
    return cy.contains('a', groupName);
  }
  menu(groupName) {
    return this.groupMenuItem(groupName).find('.expand-state g g');
  }
  get menuItemFormLayouts() {
    return cy.contains('Form Layouts');
  }
  get menuItemDatepicker() {
    return cy.contains('Datepicker');
  }
  get menuItemToastr() {
    return cy.contains('Toastr');
  }
  get menuItemTables() {
    return cy.contains('Smart Table');
  }
  get menuItemTooltip() {
    return cy.contains('Tooltip');
  }
}
export const navigationPage1 = new NavigationPage();
