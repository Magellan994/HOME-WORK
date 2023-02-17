/////// дз 6

let userDate = prompt('year of birth')
let userCity = prompt('Which city')
let kindeOfSport = prompt('Which sport')

if (userDate !== null){
    alert(`your age is ${2023 - userDate}`)
    if (userCity === 'Kiev'){
        alert('capital of Ukraine');
    }else if (userCity ==='London'){
        alert('capital of UK');
    }else if (userCity ==='Washington'){
        alert('capital of USA');
    }else {
        alert(`your city is ${userCity}`)
    }
    if (kindeOfSport === 'box'){
        alert('do you want t be like a M.Ali?')
    }else if(kindeOfSport === 'football'){
            alert('do you want to be like a L.Messi ?')
    }else if(kindeOfSport === 'basketball'){
        alert('do you want to be like a M.Jordan ?')
    }else {
        alert('also good!')
    }
}else{
    alert(`so sorry that you do not like 
    to inform us about your date of birth, where do you live
    ,and kinde of sport that do you like .... `)
}



