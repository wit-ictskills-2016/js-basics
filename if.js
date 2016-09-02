// Control flow
const option1 = true;
const option2 = true;

if (option1 && option2) {
  console.log('both true');
} else if (!option1 && !option2) {
  console.log('both false');
} else if (!option1 && option2) {
  console.log('option 2 only true');
} else if (option1 && !option2) {
  console.log('option 1 only true');
}
