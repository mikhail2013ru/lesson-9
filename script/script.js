'use strict';

let start = document.getElementById('start');
console.log(start);

let buttonPlusIncome = document.getElementsByTagName('button')[0];
console.log(buttonPlusIncome);

let buttonPlusExpenses = document.getElementsByTagName('button')[1];
console.log(buttonPlusExpenses);

let buttonDeposit = document.querySelector('#deposit-check');
console.log(buttonDeposit);

let salaryInput = document.querySelectorAll('.salary-amount')[0];
console.log(salaryInput);

let incomeInput = document.querySelectorAll('.income-title')[1];
console.log(incomeInput);

let amountInput = document.querySelectorAll('.income-amount')[0];
console.log(amountInput);

let additionalInputncome1 = document.querySelectorAll('.additional_income-item')[0];
console.log(additionalInputncome1);

let additionalInputncome2 = document.querySelectorAll('.additional_income-item')[1];
console.log(additionalInputncome2);

let expensesTitle = document.querySelectorAll('.expenses-title')[1];
console.log(expensesTitle);

let expensesAmount = document.querySelectorAll('.expenses-amount')[0];
console.log(expensesAmount);

let additionalExpensesItem = document.querySelectorAll('.additional_expenses-item')[0];
console.log(additionalExpensesItem);

let targetAmount = document.querySelectorAll('.target-amount')[0];
console.log(targetAmount);

let resultBudgetMonth = document.querySelectorAll('.result-total')[0];
console.log(resultBudgetMonth);

let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
console.log(budgetDayValue);

let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
console.log(expensesMonthValue);

let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
console.log(additionalIncomeValue);

let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
console.log(additionalExpensesValue);

let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
console.log(incomePeriodValue);

let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
console.log(targetMonthValue);

let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);