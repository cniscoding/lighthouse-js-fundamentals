const howManyHundreds = function (num){
  const remainder = num % 100;
  console.log(remainder);
  const hundred = (num - remainder) / 100;
  console.log(num);
  console.log(hundred);
  return hundred;
};
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(100), "=?", 1);
console.log(howManyHundreds(200), "=?", 2);
console.log(howManyHundreds(123456), "=?", 1234);