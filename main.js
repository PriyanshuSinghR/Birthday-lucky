const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#calculate-number');
const displayMessage = document.querySelector('#output-container');
const smallText = document.querySelector('#small-display-text');

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll('-', '');
  for (let digit of date) {
    sum = sum + Number(digit);
  }
  return sum;
};

const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
  console.log(sumOfDate, numberToCheck);
  if (sumOfDate % numberToCheck === 0) {
    showMessage(`${numberToCheck} is a lucky number!! 
    🥳 🥳 🥳 `);
    smallText.innerText = `But I don't believe in luck 
    😐`;
  } else {
    showMessage(`${numberToCheck} is not that lucky 
    😕`);
    smallText.innerText = `Which only means that the sum of digits of your birthdate (${sumOfDate}) is not divisble by the lucky number (${numberToCheck}).
    👍`;
  }
};

const showMessage = (message) => {
  displayMessage.innerText = message;
};

checkButton.addEventListener('click', () => {
  const date = dateOfBirth.value;
  const numberToCheck = luckyNumber.value;
  const sumOfDate = calculateSum(date);
  if (date && numberToCheck > 0) {
    return checkIsNumberLucky(sumOfDate, numberToCheck);
  } else if (date && numberToCheck <= 0) {
    showMessage('Please enter valid Number ');
    smallText.innerText = `😒`;
  } else {
    showMessage('Please enter both the fields ');
    smallText.innerText = `😡`;
  }
});
