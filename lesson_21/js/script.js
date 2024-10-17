// Строгий режим
"use strict"

// document.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	if (targetElement.closest('.social__burger-icon')) {
// 		document.documentElement.classList.toggle('menu-open');
// 	}
// })

// let userAge
// userAge = 36
// console.log(userAge)
// userAge = 37
// console.log(userAge)
// userAge = "Valery"
// console.log(userAge)
// let nameUser
// console.log(nameUser)
// nameUser = userAge
// console.log(nameUser)

// let user ="admin"
// let userAge
// if (user === "admin" ){
//  userAge = 50
// }else{
// 	userAge = "Error!"
// }
// console.log(userAge)

// let userAge = 36
// let userName = `Валерій`
// let userInfo = "Ім'я:" + userName + ", вік:" + userAge
// let userInfo = `Ім'я:${userName}, вік:${userAge}`
// console.log(userInfo)

// let someString = `Привіт, як справи?`
// console.log(someString.length)

// let someString = `Привіт, як справи?`
// console.log(someString[4])

// let someString = `Привіт, як справи?`
// console.log(someString.toLocaleLowerCase())
// console.log(someString.toLocaleUpperCase())

// let someString = `Привіт, як справи?`
// console.log(someString.includes('як'))
// console.log(someString.startsWith('Пр'))
// console.log(someString.endsWith('и?'))

// let someString = `Привіт, як справи?`
// let someNewString = someString.slice(2,6) 
// console.log(someNewString)

// let someString = `#Привіт, як справи?`
// someString = someString.replace(`#`, ``)
// console.log(someString)

// let someNotRoundNum = 25.9
// console.log(Math.floor(someNotRoundNum))
// let someNotRoundNum = 25.001
// console.log(Math.ceil(someNotRoundNum))
// let someNotRoundNum = 25.5
// console.log(Math.round(someNotRoundNum))
// let someNotRoundNum = -25.9
// console.log(Math.abs(someNotRoundNum))

// console.log(Math.random(someNotRoundNum))
// console.log(Math.max(1,3,-4))
// console.log(Math.min(1,3,-4))

// let someVar = `35.5px`
// let someNum = parseInt(someVar)
// console.log(someNum)
// let someNum = parseFloat(someVar)
// console.log(someNum)

// let varOne = '10'
// let varTwo = '3'
// let varRes = varOne - varTwo
// let varRes = varOne / varTwo
// let varRes = varOne * varTwo
// let varRes = varOne % varTwo
// let varRes = varOne + varTwo
// console.log(typeof varRes);
// console.log( varRes);


// let varOne = +'10'
// let varTwo = +'3'
// let varRes = varOne + varTwo
// console.log(typeof varRes);
// console.log( varRes);

// let someOne = 5
// let someTwo = 3
// ++someOne
// --someTwo
// console.log(someOne);
// console.log(someTwo);
// let someNew = someOne + someTwo
// console.log(someNew);

// let someVar = 10
// someVar = someVar + 5
// console.log(someVar);

// someVar += 5
// console.log(someVar);

// let someNum = 35*2
// let someNumTwo = someNum += 10
// console.log(someNumTwo);
// let someNumTwo = `Верстка`
// someNumTwo = someNumTwo.slice(1, 5)
// console.log(someNumTwo);



//Д.З.
// Задача №1
// Яка назва змінної вірна
// 1) let user-name
// 2) let UserName
// 3) let userName

// Відповідь: №3 -- let userName, тому що запись має бути в стилі lowerCamelCase


// Задача №2
// Чи буде помилка при виконанні наступної програми
// const userName = 20
// userName = "Іштван"



// Відповідь:так, буде помилка тому, що константу неможна змінити!


// Задача №3
// Що потрапить в консоль?
// let numOne = 20
// let numTwo = "20"

// let numSumm = numOne + numTwo
// console.log(numSumm)

// Відповідь: в консоль потрапить рядок 2020. Так як numTwo = "20" - це рядок ,
//  а додавання виконується лише тоді, коли обидва операнди є числом.