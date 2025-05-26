function printNumber(min, max) {
  if (min > max) {
    return;
  }
  console.log(min);
  printNumber(min + 1, max);
}

function printNumber2(min, max) {
  if (min > max) {
    return;
  }

  printNumber2(min + 1, max);
  console.log(min);
}

printNumber(1, 5);

printNumber2(1, 5);
