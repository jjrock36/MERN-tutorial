// synchronous or blocking
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// reads the file
console.log(first, second);

// creates a new file if one is not there AND overwrites whatever is in the current folder unless flag is added
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  // this will append the result
  { flag: 'a' }
);
console.log('done with this task');
console.log('starting the next one');
// differences: all tasks are done in order. If one task takes a long time, it prevents the rest of the application from functioning
