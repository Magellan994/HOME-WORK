/////// дз 7.5

function moreThree (num) {
    while (num % 3 === 0) {
        num /= 3;
    }
    return num === 1
}
console.log(moreThree(90))
