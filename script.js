/////// дз 7.4
/////// дз 8

let x = 13;
let a = true;


if (x === 1){
    console.log('1 is neither prime')
}else if (x > 1) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            a = false;
        }
    }

    if (a) {
        console.log(`${x} is prime`)
    } else {
        console.log(`${x} is not prime`)
    }
}else {
    console.log('this number is not a prime number')
}
