import { describe, test, expect, beforeEach } from 'vitest'
import { generateID, addItemToArray, removeItemFromArray } from '../src/utils'

// Documentation on https://vitest.dev/api/expect.html

describe('generateID()', () => {
  test('should be a string', () => {
    let result = generateID();
    expect(result).toBeTypeOf("string");
  })
})

describe('addItemToArray()', () => {
  // AAA : Arrange Act Assert
  /// Arrange data (or mock data)
  let items = null;
  let newItem = null;

  // Initialiser les variables avant l'exécution de chaque test
  beforeEach(() => {
    console.log( 'beforeEach');
    items = [{id: 1}, {id: 2}];
    newItem = {id: 3};
  })

  test('Should return a new array with a new item', () => {
    /// Act with data
    let result = addItemToArray(items, newItem);
  
    /// Assert
    expect(result).toEqual([...items, newItem]);
  })

  test('Should not change the origin array', () => {  
    /// Act with data
    addItemToArray(items, newItem);
    // items.push({id: 4});
  
    /// Assert
    expect(items).toHaveLength(2);
  })

  // How to expect an error
  test('should throw error if not an array', () => {
    expect(() => addItemToArray(null, newItem)).toThrowError('iterable');
  })
})


describe('removeItemFromArray()', () => {
  // AAA : Arrange Act Assert
  /// Arrange data (or mock data)
  let items = null;
  let itemToRemove = null;

  // Initialiser les variables avant l'exécution de chaque test
  beforeEach(() => {
    console.log( 'beforeEach');
    items = [{id: 1}, {id: 2}];
    itemToRemove = items[0];
  })
  test('Should return a new array with an item removed', () => {  
    /// Act with data
    let result = removeItemFromArray(items, itemToRemove);
  
    /// Assert
    expect(result).toHaveLength(1);
  })

  test('Should not change the origin array', () => {  
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


// Tester une fonction asynchrone
function returnValueAfterPause(value) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(value), 500)
  })
}

describe('returnValueAfterPause()', () => {
  test('Should resolve after a pause', async () => {
    /// Arrange data
    const data = {id: 1};

    /// Act with data
    const promiseResult = returnValueAfterPause(data);

    /// Assert
    await expect(promiseResult).resolves.toEqual(data);
  })

  test.skip('Should not resolve after a pause', async () => {
    /// Arrange data
    const data = {id: 1};

    /// Act with data
    const promiseResult = returnValueAfterPause(data);

    /// Assert
    await expect(promiseResult).rejects.toEqual(data);
  })
})





