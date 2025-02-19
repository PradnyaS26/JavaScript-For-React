// var, let, const


// var : Declares variables with function or global scope and 
// allows re-declaration and updates within the same scope.
// example

console.log("\nVAR\n")

var name = "Pradnya"
console.log(name)
var name = "Chimu" // Re-declaration is allowed
console.log(name)

function readmydoc(){
  var nameme="Surya"
  name="Suryavanshi"  // global scoped variable can be read & updated 
  console.log("In function readmydoc: "+name) 
}
readmydoc()
// console.log(nameme) // Throws error: not defined (Function Scoped)

if(5==5){
  var namevar = "Rushi"
  console.log("From If Block: "+namevar)
}
console.log("From out of If Block: "+namevar)

// var variables are not block scoped, they are only function scoped.

// =====================================================================

// let : Declares variables with block scope, 
// allowing updates but not re-declaration within the same block.

console.log("\nLET\n")

let letname = "Rohit"
// let letname = "Rohan" // Throws Error : Cannot redeclare block-scoped variable 'letname'.ts(2451)
console.log(letname)

function readmyletdoc(){
  console.log("in readmyletdoc function")
  letname="Rohan" // Global scoped let variable
  console.log(letname) // Can be updated 

  let letBlocked = "Meena"
  console.log(letBlocked)

  console.log("out of readmyletdoc function")

}
readmyletdoc()
// console.log(letBlocked) // Throws error: not defined (Block Scoped)
console.log(letname)

// =====================================================================

// const: Declares block-scoped variables that cannot be reassigned after their 
// initial assignment.

console.log("\nCONST\n")

const constant = "Subhash"
console.log(constant)
// constant = "Pappa" // Throws Errors : Assignment to constant variable.

function readMyConstant(){
  console.log("in readMyConstant function")
  console.log(constant)

  const newConstant = "Pappa" 
  console.log("out of readMyConstant function")

}

readMyConstant()
// console.log(newConstant) // Throws error: not defined (Block Scoped)






