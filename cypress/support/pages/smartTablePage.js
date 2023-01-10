export class SmartTablePage {
  get tableBody() {
    return cy.get('tbody');
  }
  tableRowAtName(userName) {
    return this.tableBody.contains('tr', userName);
  }
  get tableRows() {
    return cy.get('tr.ng-star-inserted').eq(0);
  }
  get editButton() {
    return cy.get('.nb-edit').eq(0);
  }
  get tableRowAtAge() {
    return cy.get('[placeholder="Age"]').eq(1);
  }
  get checkMarkButton() {
    return cy.get('.nb-checkmark');
  }
  get ageRowAfterChange() {
    return cy.get('td').eq(6);
  }
  get tableHead() {
    return cy.get('thead');
  }
  get plusButton() {
    return this.tableHead.find('.nb-plus');
  }
  get editRow() {
    return this.tableHead.find('tr').eq(2);
  }
  get firstNamePlace() {
    return this.editRow.find('[placeholder="First Name"]');
  }
  get lastNamePlace() {
    return this.editRow.find('[placeholder="Last Name"]');
  }
  get firstNameRowAfterChange() {
    return cy.get('tr').eq(2).find('td').eq(2);
  }
  get lastNameRowAfterChange() {
    return cy.get('tr').eq(2).find('td').eq(3);
  }
  trashButton(index) {
    return cy.get('tbody tr').eq(index).find('.nb-trash');
  }
}
export const smartTablePage = new SmartTablePage();
