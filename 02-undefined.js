/* 
 8 ways to get Undefine
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range 
7. deleting an element inside an array
8. set a value directly to undefined
*/



// 1)
// variable that is not initialized will give undefined
let first;
console.log(first)//undefined


// (2)
// function with no return 
function second(a, b){
    const total = a + b;
}
const result = second(1,2);
console.log(result);//undefined //because not returned


// (3)
// parameter that is not passed will be undefined
function third(a, b, c, d){
    const total = a+b+c+d;
    console.log(a, b, c, d);//output: 2 5 undefined undefined
}
third(2, 5);




// (4)
// if return has nothing on the right side will return undefined
function noNegative(a, b){
    if(a < 0 || b< 0){
        return// ki rorbe seta bole deiNi tai undefined
    }
    return a + b;
}
const total = noNegative(2,-5);
console.log(total);// output: undefined  // ki rorbe seta bole deiNi tai undefined




// (5)
// property that doesn't exists on an object will give you undefined
const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary);// output: 40 undefined // salary property ta object er moddhe nai tai salary undefined


console.log('---------')

// (6)
// accessing array elements outside of the index range
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]); // output: 89 undefined undefined undefined
// karon 5index and 200index array te nai




// (7)
// deleting an element inside an array
// you should not do it. Instead use splice// array theke kichu element bad dite chaile delete na kore splice korbo... delete korbo na splice korbo
const seventh = [55, 66, 77, 88, 99];
delete seventh[1];// delete 89
console.log(seventh[1])//output: undefined
console.log(seventh); //output: [ 55, <1 empty item>, 77, 88, 99 ]



// (8)
// set a value directly to undefined
const eighth = undefined;
console.log(eighth)



console.log('----null vs undefined-----')
// COMMENT: jor kore kothay undefined set kora jabe na. dorkar porle null set kora jabe
//COMMENT: variable niyechi. kintu variable e kono data initally na rakhte chaile null use korbo
const ninth = null;
const data = {results: [], updated: null}


console.log(typeof undefined); //output: undefined
console.log(typeof null); //output: object
//typeof null holo JavaScript language er bug
//typeof null object dekhaleo eta thik JS wala ra thik na korar karon holo , onek old website er moddhe bug dekha dibe




/*
In JavaScript, typeof null returns "object" because of an early design bug where null was treated similarly to objects. This behavior remains for backward compatibility. Instead of using typeof, the correct way to check for null is by using value === null.


To properly check for null, you can use:
value === null

*/