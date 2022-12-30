function selectDayFromCurrent(day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  let futureDay = date.getDate();
  let futureMonth = date.toLocaleString('en-US', { month: 'short' });
  let futureYear = date.getFullYear();
  let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear();

  cy.get('nb-calendar-navigation')
    .invoke('attr', 'ng-reflect-date')
    .then((dateAttr) => {
      if (!dateAttr.includes(futureMonth) || !dateAttr.includes(futureYear)) {
        cy.get('[data-name="chevron-right"]').click();
        selectDayFromCurrent(day);
      } else {
        cy.get('nb-calendar-day-picker .ng-star-inserted')
          // cy.get('.day-cell').not('.bounding-month') <- doesn't work for me
          .contains(futureDay)
          .click();
      }
    });
  return dateAssert;
}

export class DatepickerPage {
  selectCommonDatepickerDateFromToday(dayFromToday) {
    cy.contains('nb-card', 'Common Datepicker')
      .find('input')
      .then((input) => {
        cy.wrap(input).click();
        let dateAssert = selectDayFromCurrent(dayFromToday);
        cy.wrap(input).should('have.value', dateAssert);
      });
  }
  selectDatepickerWithRangeFromToday(firstDay, secondDay) {
    cy.contains('nb-card', 'Datepicker With Range')
      .find('input')
      .then((input) => {
        cy.wrap(input).click();
        let dateAssertFirst = selectDayFromCurrent(firstDay);
        let dateAssertSecond = selectDayFromCurrent(secondDay);
        const finalDate = dateAssertFirst + ' - ' + dateAssertSecond;
        cy.wrap(input).should('have.value', finalDate);
      });
  }
}

export const onDatepickerPage = new DatepickerPage();
