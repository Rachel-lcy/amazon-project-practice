


import { formatCurrency } from '../scripts/utils/money.js';
console.log('Hello');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}


if (formatCurrency(0) === '0.00') {
  console.log('passed');
}
console.log('Hello');