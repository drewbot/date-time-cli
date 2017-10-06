const moment = require('moment');
const readline = require('readline');
const TimeSetter = require('./time-setter');

const ts = new TimeSetter();

console.log('hours passed', ts.hoursPassed);
console.log('minutes passed', ts.minutesPassed);
console.log('seconds passed', ts.secondsPassed);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: `What would you like to know?>`
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'options':
      console.log(`Available commands:
        'dt' (date / time)
        'dy' (day / year)
        'seconds'
        'daylight'
        'leap'`);
      break
    case 'dt':
      ts.printDateTime();
      break;
    case 'dy':
      ts.printDayOfYear();
      break;
    case 'seconds':
      ts.printSeconds();
      break;
    case 'daylight':
      ts.printDaylight();
      break;
    case 'leap':
      ts.printIsLeapYear();
      break;
    default:
      console.log(`Say what? you said: '${line.trim()}',
        Available commands:
        'dt' (date / time)
        'dy' (day / year)
        'seconds'
        'daylight'
        'leap'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
