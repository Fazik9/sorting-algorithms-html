/////1111111

'use strict';
const path = require('path');

// 1. Print current file’s details
console.log('Current file name:', path.basename(__filename));
console.log('Parent folder:', path.dirname(__filename));
console.log('Extension:', path.extname(__filename));
console.log('Parsed object:', path.parse(__filename));

// 2. Use path.join() to create a combined path
const joinedPath = path.join('/users', 'student', 'docs', 'notes.txt');
console.log('Joined path:', joinedPath);

// 🧩 Challenge – get filename without extension
function getNameWithoutExt(file) {
  return path.basename(file, path.extname(file));
}
console.log('File name without extension:', getNameWithoutExt(__filename));


////////222222


'use strict';

// 1. Show platform and current working directory
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());

// 2. Show memory usage summary
console.log('Memory usage:', process.memoryUsage());

// 3. Add a new environment variable
process.env.MY_APP_MODE = 'development';
console.log('New environment variable:', process.env.MY_APP_MODE);

// 4. OS check challenge
if (process.platform === 'win32') {
  console.log('Running on Windows!');
} else {
  console.log('Running on another OS!');
}

// 5. Exit after 3 seconds
setTimeout(() => {
  console.log('Exiting process...');
  process.exit();
}, 3000);



////////////3


'use strict';
const os = require('os');

// 🧩 Challenge – calculate used memory %
function getUsedMemoryPercent() {
  const used = ((os.totalmem() - os.freemem()) / os.totalmem()) * 100;
  return used.toFixed(2);
}

// 1. Log system info every 2 seconds
const interval = setInterval(() => {
  console.log('Hostname:', os.hostname());
  console.log('Free memory:', os.freemem());
  console.log('Total memory:', os.totalmem());
  console.log('Used memory (%):', getUsedMemoryPercent(), '%');
  console.log('System uptime (s):', os.uptime());
  console.log('---------------------------');
}, 2000);

// 2. Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log('Monitoring stopped.');
}, 10000);
