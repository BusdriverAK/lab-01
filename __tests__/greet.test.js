'use strict';

const greet = require('../lib/greet.js');
//const faker = require('faker');

test('returns null if not a string', ()=>{
  expect(greet.hello(4)).toBe(null);
});

test('concats hello with a string', ()=>{
  expect(greet.hello('Mike')).toBe('hello Mike');
});