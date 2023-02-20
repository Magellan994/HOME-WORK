////////*ДЗ 6*///////////

const userDate = prompt('your date of birth?')

const userCity = prompt('your city?')

const userSport = prompt('favorite kind of sport?')

let age ;

let city ;

let sport ;

switch (userDate){
    case null:
    case '':
        age =''
        break
    default:
        age = `your age is ${2023 - userDate},`
        break
}

switch (userCity){
    case null:
    case '':
        city = ''
        break
    case 'London':
        city = ` ${userCity} the capital of UK,`
        break
    case 'Kiev':
        city = `${userCity} the capital of Ukraine,`
        break
    case 'Washington':
        city = `${userCity} the capital of Usa,`
        break
    default:
        city = `your city is ${userCity}`
}

switch (userSport){
    case null:
    case '':
        sport = ''
        break
    case 'Box':
    case 'box':
        sport = 'cool,do you want  to be like a M.Ali?'
        break
    case 'Football':
    case 'football':
        sport = 'cool,do you want  to be like a Messi?'
        break
    case 'Basketball':
    case 'basketball':
        sport = 'cool,do you want  to be like a Jordan?'
        break
    default:
        sport = `${userSport} also cool.`
        break
}
if (userDate === null  && userCity === null && userSport === null) {
    alert(`sorry but no information about your ${age},${city},${sport} `);
}else {
    alert(` ${age} ${city} ${sport}`)
}