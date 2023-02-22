/////// дз 7.4


let x = 20;

d:
    for (let  i = 2; i <= x; i++){
        for (let j = 2; j < i; j++){
            if (i % j === 0) continue d
        }
        console.log(i)
    }