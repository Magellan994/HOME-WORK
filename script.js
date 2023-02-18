
let userDate = prompt('year of birth');
let userCity = prompt('Which city');
let kindeOfSport = prompt('Which sport');

let userAge = 'your age'
let userCityInfo = 'your city';
let userSport ='kind of sport'

if (userDate === null) {
    alert(`you dont like to inform us about ${userAge} ,${userCityInfo},${userSport}`);


}else {
    userAge = `your age is ${2023 - userDate}`
    if (userCity === 'Kiev'){
        userCityInfo='your city is a capital of Ukraine';
    }else if (userCity ==='London'){
        userCityInfo ='your city is a capital of UK';
    }else if (userCity ==='Washington'){
        userCityInfo ='capital of USA';
    }else {
        userCityInfo = `your city is ${userCity}`
    }
    if (kindeOfSport === 'Box' || 'box'){
        userSport ='do you want t be like a M.Ali?'
    }else if(kindeOfSport === 'Football' || 'football'){
        userSport='do you want to be like a L.Messi ?'
    }else if(kindeOfSport  === 'Basketball' || 'basketball'){
        userSport='do you want to be like a M.Jordan ?'
    }else {
        userSport = 'also good!'
    }
    alert(`${userAge},${userCityInfo},${userSport}`)
}
