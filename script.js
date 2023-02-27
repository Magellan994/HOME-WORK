let arr = [];


let words = +prompt('длина массива? ');

for (let i = 0; i < words; i++){
    let el = prompt('?')
    arr.sort((a,b) => a - b ).push(el);
}
for ( let j = 2; j <= 4; j++){
    delete arr[j]
}

console.log(arr)
