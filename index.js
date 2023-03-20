function fizz(i) {
  if (i % 3 == 0) {
    return true;
  }
  return false;
}

function buzz(i) {
  if (i % 5 == 0) {
    return true;
  }
  return false;
}

function fizzBuzz(i) {
  if (fizz(i) == true && buzz(i) == true) {
    return true;
  }
  return false;
}

(function () {
  for (i = 1; i <= 100; i++) {
    switch (true) {
      case fizzBuzz(i):
        console.log("Fizz Buzz");
        break;
      case fizz(i):
        console.log("Fizz");
        break;
      case buzz(i):
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
})();
