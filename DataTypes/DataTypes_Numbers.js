//  NUMBERS

var num1 = 10; // Integer
var num2 = 10.9; // Decimal Number

console.log(typeof num1); //number
console.log(typeof num2); //number

var num3 = 15;
// addition
var sum = num3 + num1 + num2;
console.log(sum)
console.log(typeof(sum))

// substraction
var sub = num3 - num1;
console.log(sub)
console.log(typeof(sub))

// multiply
var mul = num3 * num1;
console.log(mul)
console.log(typeof(mul))

// div
var div = num3 / num1;
console.log(div)
console.log(typeof(div))

// div by zero
var divzero = num3 / 0;
console.log(divzero)
console.log(typeof(divzero))

// mul by string
var mulbystring = num3 * "A"
console.log(mulbystring) //NAN - not a number
console.log(typeof(mulbystring))


//JS NUMBER FUNCTIONS

// toString() number as input and returns a string

console.log(num1.toString())
console.log(num2.toString())

// parseInt() string numeral as input and returns a number

var strNum1 = "10"
var strNum2 = "11.5"
var strNum3 = "ABC"
console.log(parseInt(strNum1))
console.log(parseInt(strNum2))

console.log(parseFloat(strNum2))

console.log(parseInt(strNum3))

// toFixed() takes floating number and rounds it off to given position

var strFloat = 87.323243242
console.log(strFloat.toFixed())

console.log(strFloat.toFixed(3))
