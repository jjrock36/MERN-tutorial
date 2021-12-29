const path = require('path');

// my platform specific seperator
console.log(path.sep);

// joins a sequence of path methods and normalizes them
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// basename
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
