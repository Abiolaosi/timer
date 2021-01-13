/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:
node timer1.js 10 3 5 15 9
this will make it beep at:

   3 seconds, 5 seconds, 9 seconds , 10 seconds,  15 seconds

we can simply output the following special character to stdout.

process.stdout.write('\x07');*/



const alarms = process.argv.slice(2);
// console.log(alarms);
if (alarms.length) {
  const Newalarms = alarms.filter(
    (element) => element > 0 && typeof element !== "number"
  );
  for (const element of Newalarms) {
    setTimeout(() => {
      process.stdout.write("\x07" + "beep" + element);
    }, element * 1000);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, Math.max(...Newalarms) * 1000);
}



/*
For this app, we can think of at least these three:

    No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
    An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
    An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number */



