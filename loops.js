// A for loop
// logs `try 0`, `try 1`, ..., `try 4`
for (let i = 0; i < 5; i++) {
  console.log(`try ` + i);
}

// A typical for loop
for (let i = 0, limit = 100; i < limit; i++) {

  // This block will be executed 100 times
  console.log('Currently at ' + i);

  // Note: the last log will be `Currently at 99`
}

// A typical while loop
let i = 0;

while (i < 100) {
  // This block will be executed 100 times

  console.log(`Currently at ` + i);

  // increment i

  i++;
}

// A while loop with a combined conditional and incrementer

let j = -1;

while (++j < 100) {
  // This block will be executed 100 times

  console.log(`Currently at ` + j);
}

// A do-while loop
do {
  // Even though the condition evaluates to false
  // this loop's body will still execute once.
  console.log(`Hi there!`);
}
while (false);

// Stopping a loop
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
}

// Skipping to the next iteration of a loop
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }

  // The following statement will only be executed
  // if the conditional 'something' has not been met
  console.log(`I have been reached`);
}
