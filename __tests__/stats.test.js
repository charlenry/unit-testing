import { describe, test, expect, beforeEach } from 'vitest'
import { getBalance, getIncome, getExpense } from '../src/stats'

let transactions = null;

beforeEach(() => {
  transactions = [
    {
      id: 1,
      label: "recette",
      amount: 100
    },
    {
      id: 2,
      label: "dépense",
      amount: -30
    },
    {
      id: 3,
      label: "recette",
      amount: 50
    },
    {
      id: 4,
      label: "dépense",
      amount: -60
    },
    {
      id: 5,
      label: "recette",
      amount: 150
    },
    {
      id: 6,
      label: "dépense",
      amount: -80
    }
  ];
})


describe("getBalance()", () => {
  test("Should return the balance of the transactions", () => {
    let balance = getBalance(transactions);
    expect(balance).toBe(130);
  })
})

describe("getIncome", () => {
  test("Should return the amount of the incomes", () => {
    let totalIncome = getIncome(transactions);
    expect(totalIncome).toBe(300);
  })
})

describe("getExpense()", () => {
  test("Should return the amount of the expenses", () => {
    let totalExpense = getExpense(transactions);
    expect(totalExpense).toBe(-170);
  })
})