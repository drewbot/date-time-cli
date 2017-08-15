const moment = require('moment');
const chalk = require('chalk');

let now = moment();

class TimeSetter {
  constructor() {
    this.dateTime = now.format('MMMM Do YYYY, h:mm:ss a');
    this.dayOfYear = now.format('DDDo');
    this.hoursPassed = Number(now.format('k'));
    this.minutesPassed = Number(now.format('m'));
    this.secondsPassed = Number(now.format('s'));
    this.secondsInDay = ((this.hoursPassed * 3600) + (this.minutesPassed * 60)) + this.secondsPassed;
  }
  setTimes() {
    let now = moment();
    this.dateTime = now.format('MMMM Do YYYY, h:mm:ss a');
    this.dayOfYear = now.format('DDDo');
    this.hoursPassed = Number(now.format('k'));
    this.minutesPassed = Number(now.format('m'));
    this.secondsPassed = Number(now.format('s'));
    this.secondsInDay = ((this.hoursPassed * 3600) + (this.minutesPassed * 60)) + this.secondsPassed;
  }
  printDateTime() {
    this.setTimes();
    console.log(`It is ${chalk.blue(this.dateTime)}`);
  }
  printDayOfYear() {
    this.setTimes();
    console.log(`It is the ${chalk.magenta(this.dayOfYear)} day of the year.`);
  }
  printSeconds() {
    this.setTimes();
    console.log(`It is ${chalk.cyan(this.secondsInDay)} seconds into the day.`);
  }
  printDaylight() {
    if (moment().isDST()) {
      console.log(`It ${chalk.green('is')} during Daylight Savings time.`);
    } else {
      console.log(`It ${chalk.red('is not')} during Daylight Savings time.`);
    };
  }
  printIsLeapYear() {
    if (moment().isLeapYear()) {
      console.log(`It ${chalk.green('is')} a Leap Year.`);
    } else {
      console.log(`It ${chalk.red('is not')} a Leap Year.`);
    };
  }
}

module.exports = TimeSetter;
