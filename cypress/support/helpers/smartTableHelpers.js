import { smartTablePage } from '../pages/smartTablePage';

export class SmartTableHelpers {
  updateAgeByFirstName(userName, age) {
    smartTablePage.tableRowAtName(userName);
    smartTablePage.editButton.click();
    smartTablePage.tableRowAtAge.clear().type(age);
    smartTablePage.checkMarkButton.click();
    smartTablePage.ageRowAfterChange.should('contain', age);
  }

  addNewRecordWithFirstAndLastName(firstName, lastName) {
    smartTablePage.plusButton.click();
    smartTablePage.firstNamePlace.type(firstName);
    smartTablePage.lastNamePlace.type(lastName);
    smartTablePage.checkMarkButton.click();
    smartTablePage.firstNameRowAfterChange.should('contain', firstName);
    smartTablePage.lastNameRowAfterChange.should('contain', lastName);
  }

  deleteRowByIndex(index) {
    const stub = cy.stub();
    cy.on('window:confirm', stub);
    smartTablePage
      .trashButton(index)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          'Are you sure you want to delete?'
        );
      });
  }
}

export const onSmartTablePage = new SmartTableHelpers();
