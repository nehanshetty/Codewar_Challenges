function isDivisible(n, x, y) {
    return (n % x == 0 && n % y == 0) ? true :false;
   }

console.log(isDivisible(24,6,4));