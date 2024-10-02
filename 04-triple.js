//IMPORTANT:
//NOTE: always use ===
//NOTE: equal comparison doesn't work for non-primitive
//NOTE: so if need compare two object or array that means compare two non-primitive then google it for structure. index check kore kivabe compare kore jodi dorkar hoy google korle peye jabo



// == only man check kore
// === man and value 2 tai check kore


// const a = '1'     //truthy  // string truthy 
const a = 1     //truthy
const b = true  //truthy
if(a == b){
    console.log('values are equal') //execute this line
}
else{
    console.log('values are not equal');
}
/*
IMPORTANT:
//type coerction typeconversion typecasting hoy a and b er moddhe..
type coercion
type conversion
type casting
behind the scenes true re convert kore 1 and false re convert kore 0 te

ei examle a and b er different value er jonne fifferent output:
a=0 and b=false=> 0 => (a=b => true)
a=0 and b=true=> 1 => (a=b => false)

a=1 and b=true=> 1 => (a=b => true)
a=1 and b=false=> 0 => (a=b => false)

a=2 and b=false=> 0 => (a=b => false)
a=3 and b=false=> 0 => (a=b => false)
a=4 and b=true=> 1 => (a=b => false)


*/

//ekhane a=1 and b=true equal dekhai jodi double equal use kori tokhon
//ei problem solve korar jonne triple equal use korte hobe.. 


//non-premitive e aktar value arekTai assign korle value check kore na. reference/location check kore
//ekhane first and second same memory location show korche, karon assign kora hoyeche. tai true
const first = [];
const second = first;

if(first === second){
    console.log('values are equal') //execute this line //because reference/location same
}
else{
    console.log('values are not equal'); 
}



//non-primitive e value check kore na. location/ reference check kore. tai ekhane value same holeo loctin same na. tai false
// const third = {};
// const fourth = {};
const third = {name: 'bob', age: 30};
const fourth = {name: 'bob', age: 30};
// const third =[]
// const fourth = [];
// const third = [45, 54, 98];
// const fourth = [45, 54, 98];
if(third === fourth){
    console.log('values are equal')
}
else{
    console.log('values are not equal'); //execute this line
}






/*
In JavaScript, type coercion, type conversion, and type casting all refer to changing a value from one type to another, but there are some subtle differences between them



1. Type Coercion:
-------------------
**) Implicit conversion of a value from one type to another by JavaScript itself.
**) Happens automatically during certain operations (e.g., comparing different types with == or performing arithmetic on mixed types).

Example:
--------
console.log('5' + 3); // "53" (number 3 is coerced into a string)
console.log('5' - 3); // 2 (string '5' is coerced into a number)






2. Type Conversion:
--------------------
**) Explicit conversion of one type to another by the developer.
**) Involves manually converting the value using functions like Number(), String(), or Boolean().

Example:
--------
let str = "123";
let num = Number(str); // Explicit conversion from string to number
console.log(num); // 123





3. Type Casting (often used interchangeably with Type Conversion):
--------------------------------------------------------------------
**) Explicit conversion but typically refers to the act of changing the data type when you know exactly what you're doing.
**) More of a traditional term in strongly typed languages, but in JavaScript, it's synonymous with Type Conversion.

Example:
--------
let bool = Boolean(1); // Explicitly cast number 1 to boolean
console.log(bool); // true




Summary:
--------
**) Type Coercion is automatic and implicit.
**) Type Conversion and Type Casting are explicit, with developers intentionally converting types using specific methods.


*/