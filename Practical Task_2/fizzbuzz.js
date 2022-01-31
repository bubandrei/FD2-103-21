function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let x = i % 3 === 0;
      let y = i % 5 === 0;
      console.log((x && y ? "fizzBuzz" : "") || (x ? "fizz" : "") || (y ? "Buzz" : "") || i);
    }
  }
  fizzBuzz();