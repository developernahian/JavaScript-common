
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