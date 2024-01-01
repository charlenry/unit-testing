// @vitest-environment happy-dom

// pre-requisite: npm i -D happy-dom

import { describe, test, expect } from 'vitest'
import { getFromStorage, setInStorage } from '../src/storage'

describe('getFromStorage()', () => {
  test('should return null if transactions is not in localStorage', () => {
    let result = getFromStorage('transactions');
    console.log('result :', result);
    expect(result).toBe(null);
  })

  // AAA method usage
  test('should get data in localStorage with AAA method', () => {
    /// Arrange data (or mock data)
    let transactions = [{id: 1}];
    localStorage.setItem("transactions", JSON.stringify(transactions));

    /// Act with data
    let result = getFromStorage('transactions');
    console.log('result :', result);

    /// Assert
    expect(result).toEqual(transactions);  // toEqual instead of toBe because transactions & result are different objects
  })


})

describe('setInStorage()', () => {
  test('should set data in localStorage', () => {
    const email = "john.doe@gmail.com";

    setInStorage("email", email);

    let result = JSON.parse(localStorage.getItem("email")) ;
    console.log('result :', result);

    expect(result).toBe(email);
  })  
})
