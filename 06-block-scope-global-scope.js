function add(a, b){
    const total = a+b;
    if(b>500){
        const sum = 25 + a +b;
    }
    
    else{
        const sum = 5 + a + b;
        var current = sum;
    }
    // console.log(sum)//error karon sum only elser er moddhe kaz korbe
    console.log(current);// output 13. karon else er moddhe var use kora hoyeche jeta function er moddhe upore uthe jai. details vejal ache. details vejal, so  expore na kore let ba const use korbo....
    return total;
}


// console.log(a,b);//error karon a and b function er baire asbe na
// console.log(total);//error karon total er valu return hobe total na
// console.log(sum);//error karon sum only else er moddhe kaz korbe
console.log(current)//error karon var function er baire aseni. function er moddhe upore uthe jai. video te details. etake hoistiong bole. no need to explore it. use let or const.

add(5, 3);