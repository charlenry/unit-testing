import { test, expect } from 'vitest'
import { generateID, addItemToArray, removeItemFromArray } from '../src/utils'

test('should be a string', () => {
  let result = generateID();
  expect(result).toBeTypeOf("string");
})

test('addItemToArray(): should return a new array with a new item', () => {
  // AAA : Arrange Act Assert

  // Arrange data
  const items = [{id: 1}, {id: 2}];
  const newItem = {id: 3};

  // Act with data
  let result = addItemToArray(items, newItem);

  // Assert
  expect(result).toEqual([...items, newItem]);
})

test('addItemToArray(): should not change the origin array', () => {
  // Arrange data
  const items = [{id: 1}, {id: 2}];
  const newItem = {id: 3};

  // Act with data
  addItemToArray(items, newItem);
  // items.push({id: 4});

  // Assert
  expect(items).toHaveLength(2);
})

test('removeItemFromArray() : should return a new array with an item removed', () => {
  // Arrange data
  const items = [{id: 1}, {id: 2}];
  const itemToRemove = items[0];

  // Act with data
  let result = removeItemFromArray(items, itemToRemove);

  // Assert
  expect(result).toHaveLength(1);
})

test('removeItemFromArray() : should not change the origin array', () => {
  // Arrange data
  const items = [{id: 1}, {id: 2}];
  const itemToRemove = items[0];

  // Act with data
  removeItemFromArray(items, itemToRemove);

  // Assert
  expect(items).toHaveLength(2);
})
