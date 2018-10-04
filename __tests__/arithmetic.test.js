'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

test('makes sure inputs are valid number', () =>{
  expect(arithmetic.nan('dog', 3)).toBe(null);
});

test('adds 1 + 2 to equal 3', () => {
  expect(arithmetic.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () =>{
  expect(arithmetic.subtract(3, 2)).toBe(1);
});

