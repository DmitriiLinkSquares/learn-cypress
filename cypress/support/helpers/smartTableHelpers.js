import { smartTablePage } from '../pages/smartTablePage';

export class SmartTableHelpers {
  updateAgeByFirstName(userName, age) {
    smartTablePage.tableRowAtName(userName);
    smartTablePage.editButton;
    smartTablePage.tableRowAtAge(age);
    smartTablePage.checkMarkButton;
    smartTablePage.ageRowAfterChange(age);
  }

  addNewRecordWithFirstAndLastName(firstName, lastName) {
    smartTablePage.plusButton;
    smartTablePage.editRow;
    smartTablePage.firstNamePlace(firstName);
    smartTablePage.lastNamePlace(lastName);
    smartTablePage.checkMarkButton;
    smartTablePage.firstNameRowAfterChange(firstName);
    smartTablePage.lastNameRowAfterChange(lastName);
  }

  deleteRowByIndex(index) {
    smartTablePage.stubWindow;
    smartTablePage.trashButton(index);
    smartTablePage.confirmWindow;
  }
}

export const onSmartTablePage = new SmartTableHelpers();
