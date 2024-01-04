// Building Blocks of any programming language are:
// 1. Variables : Used to store some data; Containers; var
// 2. Data Types : What type of value we jave stored in the variables; Number, String, Boolean, Null, Undefined, Objects, etc
// 3. Operators : Symbols used to perform some action on Variables; +,-,/,*,%,...
// 4. Expressions

// Program Flow : JS executes the code from top to bottom. 
//                It executes one line of code at a time. 
//                If an error occurs then the next lines of code is not executed.

// Example 

console.clear() // Clears Console

var num1 = 2;  // var is a keyword that creates a new variable
var num2 = 3;
var num3 = 6;

console.log(num1+num2+num3) // Prints everything you pass in the paranthesis

// Nomenclature

// Camel Case (Recommended for JS)

var firstName;

// Pascal Case

var FirstName;

// Snake Case 

var first_name;

//  Rules for naming JS Variables

// - Name can contain letters, digits, _ and $
var mySubject1, math$
// - Name cannot start with a digit
var maths;
// - Name can start with an _ and $
var _subjectMarks
// - Names are case sensitive
var x, X
// - Names cannot be reserved keywords
var varName
