"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeral_1 = require("numeral");
const courseValue = numeral_1(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);// eslint-disable-line no-console
