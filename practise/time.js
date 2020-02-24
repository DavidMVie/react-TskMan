const moment = require('moment');

const timeA = 1606780800000
const timeB = 1607040000000;

console.log('TimeA: ', timeA);
console.log('TimeB: ', timeB);

console.log('is TimeA before TimeB?', timeA < timeB)
console.log('Time A: ', moment(timeA).format('MMMM Do, YYYY'));
console.log('Time B: ', moment(timeB).format('MMMM Do, YYYY'))