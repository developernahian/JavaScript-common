//Closure Explore kora hoyni.... B10 M32
//maybe in future kaze lagbe... 
//---------------------------------
function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer()); // 1
console.log(firstServer()); // 2
console.log(firstServer()); // 3
console.log(firstServer()); // 4


console.log('--------------------------')

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const firstStopWatch = stopWatch();
console.log(firstStopWatch()); // 1
console.log(firstStopWatch());  // 2
console.log(firstStopWatch());  // 3
console.log(firstStopWatch());  // 4