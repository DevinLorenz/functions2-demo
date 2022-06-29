////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const multiply = (num1, num2) => num1 * num2

const divide = (num1, num2) => num1 / num2

const calculator = (num1, num2, callback) => {
    if (+num1 && +num2) {
      num1 = +num1
      num2 = +num2
      return callback(num1, num2)
    } else {
      console.log('you need to send in numbers')
    }
  }

const result = calculator(1,2,add)
const otherResult = calculator(3,4,multiply)

console.log(result)
console.log(otherResult)

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        callback(product, discount)
    })
}

const applyDiscountsByCategory = (arr, category, callback, discount) => {
    arr.forEach(product => {
        if (product.category === category) {
            callback(product, discount)
        }
    })
} 

const applyDiscounstByInventory = (arr, callback, amount, discount) => {
    arr.forEach(product => {
        if (product.inventory < amount) {
            callback(product, discount)
        }
    })
}

applyDiscounts(dogProducts, applyPercentDiscount, .1)
console.log(dogProducts)

applyDiscounts(catProducts, applyFlatRateDiscount, 2)
console.log(catProducts)

applyDiscountsByCategory(catProducts, 2, applyPercentDiscount, .15)
console.log(catProducts)

applyDiscountsByCategory(dogProducts, 1, applyPercentDiscount, .3)
console.log(dogProducts)

applyDiscounstByInventory(dogProducts, applyFlatRateDiscount, 40, 5)
console.log(dogProducts)

applyDiscounstByInventory(catProducts, applyPercentDiscount, 40, .5)
console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread) {

    return function(ingredients) {
      let order = `You ordered a ${bread} bread sandwich with `
  
      for (let i = 0; i < ingredients.length; i++) {
  
        if (i === ingredients.length - 1 && i !== 0) {
          order += `and ${ingredients[i]}.`
        } else if (ingredients.length === 1) {
          order += `${ingredients[i]}.`
        } else {
          order += `${ingredients[i]}, `
        }
      }
  
      return order
  
    }
}

const makeWheatSandwich = makeSandwich('wheat')
const makeRyeSandwich = makeSandwich('rye')


makeWheatSandwich(['pickles', 'cheese', 'ham', 'lettuce'])
makeWheatSandwich(['turkey'])




////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE

const copyArrAndChange = (arr, cb) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i])
        result.push(newValue)
    }
    return result
}

const copyStrToCamelCase = str => {
    const splitStr = str.split(' ')
    let camelCaseStr = ''
    for (let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x]
        word = word.toLowerCase()
        if (x !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        camelCaseStr += word
    }
    return camelCaseStr
}

const copyStrToSnakeCase = str => {
    str = str.toLowerCase()
    const splitStr = str.split(' ')
    const snakeCaseStr = splitStr.join('_')
    return snakeCaseStr
}

console.log(copyArrAndChange(names, copyStrToCamelCase))

console.log(copyArrAndChange(names, copyStrToSnakeCase))

// using copyArrAndChange in different context
const multiplyByFour = num => num * 4
  
const nums = [1,2,3,4,5]

let mappedNums = nums.map(multiplyByFour)
console.log(mappedNums)

// same output, just writing in-line callback
let mappedNumsAgain = nums.map(num => num * 4)
console.log(mappedNumsAgain)


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map(() => 'pink')

console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    return names.map(name => `Hello, ${name}`)
}

const greetings = formalGreeting(formalNames)

console.log(greetings)


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = places.filter(place => place[0] === 'A')

console.log(placesThatStartWithA)

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

const identifier = arr => {
    const filtered = arr.filter(obj => obj.programmer)
    return filtered[0]
  }
  
const theProgrammer = identifier(jobs)

console.log(theProgrammer)


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    return numbers.reduce((a, c) => a * c)
}

const finalProduct = productOfArray(numsToReduce)

console.log(finalProduct)



/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = expenses.reduce((a, c) => a - c.amount, budget)

console.log(remaining)