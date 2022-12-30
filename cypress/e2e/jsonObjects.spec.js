import { Console } from 'console';

/// <reference types="cypress" /
describe('JSON objects', () => {
  it('JSON objects', () => {
    cy.openHomePage();
    const simpleObject = { key: 'value', key2: 'value2' };
    const simpleArrayOfValues = ['one', 'two', 'three'];
    const arrayOfObjects = [{ key: 'value' }, { key2: 'value2' }];
    const typeOfData = { string: 'this is a string', number: 10 };
    const mix = {
      FirstName: 'Artem',
      LastName: 'Bondar',
      Age: 35,
      Students: [{ firstName: 'Lika', lastName: 'Lina' }],
    };
    console.log(simpleObject.key2);
    console.log(simpleObject['key2']);
    console.log(simpleArrayOfValues[1]);
    console.log(arrayOfObjects[2].key2);
    Console.LOG(mix.Students[0].firstName);
  });
});
