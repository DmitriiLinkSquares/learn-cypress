import { htmlAttr } from '../generalConstants';
import { datepickerPage1 } from '../pages/datepickerPage';

export class DatepickerHelpers {
  selectDayFromCurrent(day) {
    let date = new Date();
    date.setDate(date.getDate() + day);
    let futureDay = date.getDate();
    let futureMonth = date.toLocaleString('en-US', { month: 'short' });
    let futureYear = date.getFullYear();
    let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear();

    datepickerPage1.calendarNavigation
      .invoke('attr', htmlAttr.REFLECT_DATE)
      .then((dateAttr) => {
        if (!dateAttr.includes(futureMonth) || !dateAttr.includes(futureYear)) {
          datepickerPage1.chevronRight.click();
          this.selectDayFromCurrent(day);
        } else {
          datepickerPage1.calendraDayPicker
            // cy.get('.day-cell').not('.bounding-month') <- doesn't work for me
            .contains(futureDay)
            .click();
        }
      });
    return dateAssert;
  }

  selectCommonDatepickerDateFromToday(dayFromToday) {
    datepickerPage1.commonDatepickerInputField.then((input) => {
      cy.wrap(input).click();
      let dateAssert = this.selectDayFromCurrent(dayFromToday);
      cy.wrap(input).should('have.value', dateAssert);
    });
  }
  selectDatepickerWithRangeFromToday(firstDay, secondDay) {
    datepickerPage1.DatepickerWithRangeInputField.then((input) => {
      cy.wrap(input).click();
      let dateAssertFirst = this.selectDayFromCurrent(firstDay);
      let dateAssertSecond = this.selectDayFromCurrent(secondDay);
      const finalDate = dateAssertFirst + ' - ' + dateAssertSecond;
      cy.wrap(input).should('have.value', finalDate);
    });
  }
}

export const onDatepickerPage = new DatepickerHelpers();
