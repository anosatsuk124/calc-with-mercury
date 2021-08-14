const child_process = require('child_process');

const child = child_process.spawn('ls');

child.stdout.on('data', (data) => {
  console.log('stdout data:', data.toString('utf8'));
});
child.stderr.on('data', (data) => {
  console.error('stderr data:', data.toString('utf8'));
});
child.on('close', (code) => {
  console.log("on close:", code);
});
