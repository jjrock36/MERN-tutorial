// asynchronous or non-blocking approach
const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next');
// difference: the moment we 'start' this task it is offloaded and 'starts next task' right away. ALTERNATIVE: promises and async/await
