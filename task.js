function isEven(n) {
  n = +prompt("Enter a number: ");
  if (!isNaN(n)) {
    if (n % 2 === 0) {
      console.log(`The number ${n} is even.`);
    } else {
      console.log(`The number ${n} is not even.`);
    }
  } else {
    console.log("Please enter a number.");
  }
}

function isEvenAndDevidedBy3() {
  const array = [];
  let j = 0;
  for (let i = 10; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      array[j] = i;
      j++;
    }
  }
  console.log(array);
}

function SmallestAndLargestPrime(num1, num2, num3) {
  num1 = +prompt("Enter the first number: ");
  num2 = +prompt("Enter the second number: ");
  num3 = +prompt("Enter the third number: ");

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    let SmallestNumber = 0;
    let LargestNumber = 0;
    //SMALEST NUMBER
    if (num1 <= num2 && num1 <= num3) {
      SmallestNumber = num1;
    } else if (num2 <= num1 && num2 <= num3) {
      SmallestNumber = num2;
    } else if (num3 <= num1 && num3 <= num2) {
      SmallestNumber = num3;
    }
    //LARGEST NUMBER
    if (num1 >= num2 && num1 >= num3) {
      LargestNumber = num1;
    } else if (num2 >= num1 && num2 >= num3) {
      LargestNumber = num2;
    } else if (num3 >= num1 && num3 >= num2) {
      LargestNumber = num3;
    }
    function isPrime(n) {
      if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return "not prime";
            }
        }
        return "prime";
      } else {
        return "neither prime nor composite number.";
      }
    }

    console.log(
      `The smallest number ${SmallestNumber} is ${isPrime(SmallestNumber)}`
    );
    console.log(
      `The largest number ${LargestNumber} is ${isPrime(LargestNumber)}`
    );
  } else {
    console.log("Please enter numbers for all three inputs.");
  }
}
