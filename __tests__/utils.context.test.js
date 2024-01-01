import { describe, test, expect, beforeEach } from 'vitest'
import { generateID, addItemToArray, removeItemFromArray } from '../src/utils'

// Documentation on https://vitest.dev/api/expect.html

describe('generateID()', () => {
  test('should be a string', () => {
    let result = generateID();
    expect(result).toBeTypeOf("string");
  })
})

describe.concurrent('addItemToArray()', () => {
  // AAA : Arrange Act Assert
  /// Arrange data (or mock data)
  // Initialiser les variables avant l'exécution de chaque test
  beforeEach((context) => {
    console.log( 'beforeEach');
    context.items = [{id: 1}, {id: 2}];
    context.newItem = {id: 3};
  })

  test('Should return a new array with a new item', ({ items, newItem }) => {
    /// Act with data
    let result = addItemToArray(items, newItem);
  
    /// Assert
    expect(result).toEqual([...items, newItem]);
  })

  test('Should not change the origin array', ({ items, newItem }) => {  
    /// Act with data
    addItemToArray(items, newItem);
    // items.push({id: 4});
  
    /// Assert
    expect(items).toHaveLength(2);
  })

  // How to expect an error
  test('should throw error if not an array', ({newItem}) => {
    expect(() => addItemToArray(null, newItem)).toThrowError('iterable');
  })
})


describe.concurrent('removeItemFromArray()', () => {
  // AAA : Arrange Act Assert
  /// Arrange data (or mock data)
  // Initialiser les variables avant l'exécution de chaque test
  beforeEach((context) => {
    console.log( 'beforeEach');
    context.items = [{id: 1}, {id: 2}];
    context.itemToRemove = context.items[0];
  })

  test('Should return a new array with an item removed', ({ items, itemToRemove }) => {  
    /// Act with data
    let result = removeItemFromArray(items, itemToRemove);
  
    /// Assert
    expect(result).toHaveLength(1);
  })

  test('Should not change the origin array', ({ items, itemToRemove }) => {  
    /// Act with data
    removeItemFromArray(items, itemToRemove);
  
    /// Assert
    expect(items).toHaveLength(2);
  })
})


// To choose the tests to do 
// https://vitest.dev/api/#test 

// Commandes spéciales :
// npm run test
// npx vitest --globals
// npx vitest --watch

// Commande spécifiques :
// npx vitest util  - exécute seulement les fichiers dont les noms commencent par le mot util
// npx vitest stat  - idem

// Instructions spécifiques :
// test.skip()
// test.skipIf()
// test.runIf()
// test.only()
// test.todo()
// describe.skip()
// describe.only()








