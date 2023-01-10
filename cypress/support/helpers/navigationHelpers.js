import { htmlAttr } from '../generalConstants';
import { navigationPage1 } from '../pages/navigationPage';

export class NavigationHelpers {
  selectGroupMenuItem(groupName) {
    navigationPage1
      .menu(groupName)
      .invoke('attr', htmlAttr.DATA_NAME)
      .then((attr) => {
        if (attr.includes('left')) {
          navigationPage1.groupMenuItem(groupName).click();
        }
      });
  }

  formLayoutsPage() {
    this.selectGroupMenuItem('Form');
    navigationPage1.menuItemFormLayouts.click();
  }
  datepickerPage() {
    this.selectGroupMenuItem('Form');
    navigationPage1.menuItemDatepicker.click();
  }
  toastrPage() {
    this.selectGroupMenuItem('Modal & Overlays');
    navigationPage1.menuItemToastr.click();
  }
  tablesPage() {
    this.selectGroupMenuItem('Tables & Data');
    navigationPage1.menuItemTables.click();
  }
  tooltipPage() {
    this.selectGroupMenuItem('Modal & Overlays');
    navigationPage1.menuItemTooltip.click();
  }
}
export const navigateTo = new NavigationHelpers();
