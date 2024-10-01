//COMMENT: strongly typed Language (karon variable er data type bole dite hoy)
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// object student = { name: 'noya dhman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];



//COMMENT: JavaScript is a dynamic typed Language (karon variable er data type bole dite hoy na)

//COMMENT: primitive type (single value)
const a = 5;
const b = 'Samsu kopai na ekhon ar';
const d = true;


//COMMENT: non-primitive (multiple value)
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);




//IMPORTANT:
//COMMENT: primitive data type VS non-primitive data type
let x = 5;
let y = x;
console.log(x, y);//output: 5 5
y = 7;//value reassigned
console.log(x, y);//output: 5 7
//primitive data type er somoy reference rakhe na. mane memory location difference


console.log('\n-----------difference between primitive and non-primitive data type with example ----------\n')


console.log('\n---------primitive data type-------\n')
//COMMENT: Primitive data types
let num1 = 100;
let num2 = num1; // Copying the value of num1 to num2

console.log(num1); // Output: 100
console.log(num2); // Output: 100

// Now, let's change the value of num1
num1 = 200;

console.log(num1); // Output: 200
console.log(num2); // Output: 100 (remains unchanged, since primitives are stored by value)





console.log('\n---------non-primitive data type-------\n')
//IMPORTANT:
//NOTE: non-primitive e assign korar por akta modify korle onnoTa change hoye jai. karon memory same
//NOTE: but full new assign korle memory crate hoy and akta change korle onnoTa change hoy na

//COMMENT: Non-primitive data types
let obj1 = { name: "Alice", age: 10 };
let obj2 = obj1; // Copying the reference of obj1 to obj2

console.log(obj1); // Output: { name: 'Alice', age: 10 }
console.log(obj2); // Output: { name: 'Alice', age: 10 }


//MODiFYING FULL OBJECT (both change)
// Now, let's change a property of obj1 (or obj2, both same result)
obj1.age = 30;
console.log(obj1); // Output: { name: 'Alice', age: 30 }
console.log(obj2); // Output: { name: 'Alice', age: 30 } (also changes because both obj1 and obj2 refer to the same object)


// Now, let's change a property of obj2 (or obj1, both same result)
obj1.age = 50;
console.log(obj1); // Output: { name: 'Alice', age: 50 }
console.log(obj2); // Output: { name: 'Alice', age: 50 } (also changes because both obj1 and obj2 refer to the same object)



//REASSIGNING FULL OBJECT (only one change, other no change)
// Now, let's change a full object of obj1
obj1 ={ name: "Bob", age: 70 };
console.log(obj1); // Output: { name: 'Bob', age: 70 }     
console.log(obj2); // Output: { name: 'Alice', age: 50 }  //Not changed. becautse reassign korle new memory location create hobe. modify korle new memory location create hoy na


// Now, let's change a full object of obj2
obj2 ={ name: "John", age: 100 };
console.log(obj2); // Output: { name: 'John', age: 100 }
console.log(obj1);// Output: { name: 'Bob', age: 70 } //Not changed. becautse reassign korle new memory location create hobe. modify korle new memory location create hoy na


