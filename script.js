const userDate = prompt('your date of birth?')

const userCity = prompt('your city?')

const userSport = prompt('favorite kind of sport?')

let age = '';

let city = '';

let sport = '';

switch (null){
    case userDate:
    case userCity:
    case userSport:
        alert('so bad that we dont know your age and city and kind of sport')
        break
    default:
        switch ( typeof userDate){
            case 'string':
                age =`${2023 - userDate}`
                break
        }
        switch (userDate){
            case '':
                age = 'unknown'
                break
        }
        switch (userCity){
            case "Kiev":
                city = 'capital of ukraine'
                break
            case "London":
                city = 'capital of UK'
                break
            case "Washington":
                city = 'capital of USA'
                break
            case "":
                city = 'unknown'
                break
            default:
                city =`${userCity}`
        }
        switch (userSport){
            case "Box":
                sport = 'do you want to be like a M.ALI'
                break
            case "Football":
                sport = 'do you want to be like a Messi'
                break
            case "Basketball":
                sport = 'do you want to be like a Jordan'
                break
            case "":
                sport = 'unknown'
                break
            default:
            sport = 'also good kind of sport'
        }
        alert(`your age is ${age} ,your city is ${city}, ${sport}`)
        break
}
