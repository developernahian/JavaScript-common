/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string    (example: '  ' , '0' , 'false' , 'true' , ' 'na' ,'123' ,'hello'  etc) (empty string er moddhe space thakle seta truthy)(note that empty string er moddhe space na thakle seta falsy hoye jai)
4. '0', 'false'
5. {}  //example: let x = {}; ekhane empty object ta truthy value. ei object er moddeh valu thakle setao truthy
6. [] //example: let x = []; ekhane empty array ta truthy value. ei array er moddeh valu thakle setao truthy


Falsy:
1. false
2. 0
3. ''         (empty string)(no space)
4. undefined  (example: let a; //eta undefined so eta false)
5. null       (example: let a = null; //eta null so eta false)
*/




let x = [5, 6];
if(x){
    console.log('value of x is truthy');// output: value of x is truthy
}
else{
    console.log('value of x is falsy');
}




// optional 
// check falsy
const y = null;
if (!y){
    console.log('value is falsy') //output: value is falsy
}
const z = 50;
// check true
if(!!x){
    console.log('value is truthy');// output: value is truthy
}



/*
The bang operator (!) in JavaScript is used to negate a boolean value. It converts a truthy value to false and a falsy value to true.


Here's how it works:
!true becomes false
!false becomes true
!1 (truthy) becomes false
!0 (falsy) becomes true
!"" (empty string, falsy) becomes true


You can also use double bang (!!) to convert any value to its boolean equivalent:
!!1 becomes true
!!0 becomes false
*/