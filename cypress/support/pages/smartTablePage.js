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
    return cy.get('.nb-edit').eq(0).click();
  }
  tableRowAtAge(age) {
    return cy.get('[placeholder="Age"]').eq(1).clear().type(age);
  }
  get checkMarkButton() {
    return cy.get('.nb-checkmark').click();
  }
  ageRowAfterChange(age) {
    return cy.get('td').eq(6).should('contain', age);
  }
  get tableHead() {
    return cy.get('thead');
  }
  get plusButton() {
    return this.tableHead.find('.nb-plus').click();
  }
  get editRow() {
    return this.tableHead.find('tr').eq(2);
  }
  firstNamePlace(firstName) {
    return this.editRow.find('[placeholder="First Name"]').type(firstName);
  }
  lastNamePlace(lastName) {
    return this.editRow.find('[placeholder="Last Name"]').type(lastName);
  }
  firstNameRowAfterChange(firstName) {
    return cy.get('tr').eq(2).find('td').eq(2).should('contain', firstName);
  }
  lastNameRowAfterChange(lastName) {
    return cy.get('tr').eq(2).find('td').eq(3).should('contain', lastName);
  }
  stubWindow(stub) {
    return cy.on('window:confirm', stub);
  }
  trashButton(index) {
    return cy.get('tbody tr').eq(index).find('.nb-trash').click();
  }
  confirmWindow(stub) {
    return cy
      .expect(stub.getCall(0))
      .to.be.calledWith('Are you sure you want to delete?');
  }
}
export const smartTablePage = new SmartTablePage();
