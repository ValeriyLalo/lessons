// Строгий режим
"use strict"

// document.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	if (targetElement.closest('.social__burger-icon')) {
// 		document.documentElement.classList.toggle('menu-open');
// 	}
// })

// let result = 30*40
// console.log(result);

// let num = 2
// let results = 40-15*2/--num
// console.log(results);

// let result = 10 >= 6
// console.log(result)
// console.log(typeof result)

// let result = 10 === "10"
// console.log(result)
// console.log(typeof result)

// let a = 10
// let b = +"5"
// let result = a + b
// console.log(result)


// let result = ''|| 0 && !1||2
// console.log(result)
// console.log(Boolean(result))

// let time = 11

// if( time <=10 ){
	
// 	console.log("Йдемо спати!")
// }else{
// 	console.log("НЕ йдемо спати!")
// }

// console.log("Продовження коду!")
// console.log(time)


// let varOne = "1"
// let varTwo = 2
// let varThree = 3
// let varFour = 4
// if(varOne == 3 || varTwo === 3 && varThree <= 3 || varFour === 5 ){
// 	console.log('Умова true')
// }
// console.log('Продовження')

// let varOne = "1"
// let varTwo = 2
// let varThree = 3
// let varFour = 4
// if( varOne == 1 && varTwo > !2){
// 	console.log('Умова true')
// }else{
// 	console.log('Умова false')
// }

// let someVar = 15 < 10 ? "15 більше 10" : "15 менше 10"
// console.log(someVar);

// let someVar
// if(15 > 10){
// 	console.log("15 більше 10")
// }else{
// 	console.log("15 менше 10")
// }

// let someString = "Привіт! Як справи?"
// console.log(someString.length)
// console.log(someString[0])
// console.log(someString[1])
// console.log(someString[2])
// console.log(someString[3])
// console.log(someString[4])
// console.log(someString[5])
// console.log(someString[6])


// for (let i = 0; i < someString.length ; ++i){
// 	console.log(someString[i])
// }

// let someArray = [ 10, "Жека", true,"Привіт!!!" ]
// console.log(someArray)
// console.log(someArray.length)
// console.log(someArray[3])
// console.log(Array.isArray(someArray))

// for(let i = 0; i < someArray.length ; ++i){
	// console.log(someArray[i])

	// if(someArray[i] > 5){
	// 	console.log(`Це число більше ніж 5`)
	// }else{
	// 	console.log(`Це число менше ніж 5`)
	// }
// }
// someArray.forEach((item, index) => {
// 	console.log(index)
// 	console.log(item)
	
// })
// console.log(someArray)

// someArray.push("Марія")
// console.log(someArray)

// console.log(someArray.includes("Петро"))

// if(!someArray.includes("Петро")){
// 	someArray.push("Петро")
// }
// console.log(someArray)

// someArray = someArray.join(', ')
// console.log(typeof someArray)
// console.log(someArray)



// Функції

// function showMessage( someText = "Tекст за замовченням"){
// 	console.log(someText);
// }
// showMessage()
// showMessage("Моє повідомлення")
// showMessage("!!!")

// const numOne = 10
// const numOTwo = 20

// function calcSum(a = 0, b = 0){
// 	console.log(a + b)

// }
// calcSum(numOne)
// calcSum(numOne, numOTwo)
// calcSum(50, 40)


// const numOne = 10
// const numOTwo = 20

// function calcSum(a = 0, b = 0){
// return a + b
// }
// function showMessage( someText = "Tекст за замовченням"){
// 	console.log(someText)
// }
// calcSum(numOne, numOTwo)
// showMessage()
// showMessage(calcSum(numOne, numOTwo))

// Звичайна функція

// function someName(text) {
// 	console.log(text)
// }

// Стрілочна Функція в один рядок
// let someName = (text) => console.log(text) 

// Функція до більше рядків
// let someName = (text) => {
	// console.log(text)
	//......
	//......
	//......
// }


// const text = "Привіт! Вітаю з закінченням курсу з якісної побудови web-інтерфейсів(	HTML, CSS, JS). Всього найкращого!  "
// let template = ``

// function initText(text) {
// 	for (let i = 0; i < text.length; i++) {
// 		let item = text[i]
// 		item = item === ' ' ? "&nbsp;" : item
// 		template += `<span style="animation-delay:${i * 0.1}s">${item}</span>`

// 	}
// }

// або

// function initText(text) {
// 	for (let i = 0; i < text.length; i++) {
// 		let item = text[i]
// 		template += 
// 			`<span style="${item === ' ' ? 'display: inline;' : "" } animation-delay:${i * 0.1}s">${item}</span>`
// 	}
// }

// initText(text)

// const page = document.querySelector('.page')
// page.insertAdjacentHTML("beforeend",template)




// Задача №1
// Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.


for (let i = 1; i <= 10; ++i) {
	console.log(`Пункт № ${i}`)
}

// Задача №3
// Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 


// function num(a,b) {
// 	if(a === undefined || a === 0) a = 0
// 	if (b === undefined || b === 0) b = 1 
// 	let result = a / b
// 	return`Результат ділення:${result}`;
// }
// console.log(num(10, 2))
// console.log(num(30, 3))
// console.log(num(30,0))
// console.log(num(0,20))
// console.log(num(56, 8))
// console.log(num())

function calculation(a = 0, b = 0) {
	if(a !== 0 || b !== 0) {
		a >= 1
		b >= 1
	}
	if (b === 0  ) {
		return `Результат ділення: на нуль ділити не можна!`
	}
	if (a === 0  ) {
		return `Результат ділення: 0`
	}
	if (typeof(a)!== `number` || typeof(b) !== `number` ){
		return `Результат ділення: дільник не є числом!`
	}
	let result = a / b
	return`Результат ділення:${result}`
}

console.log(calculation(10, 2))
console.log(calculation(30, 3))
console.log(calculation(30,0))
console.log(calculation(0,20))
console.log(calculation(56, 8))
console.log(calculation("Коля", 8))
console.log(calculation(-10, 2))



// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

const array = [5, '80', "Вася", 10, 'Іштван']
// let number 
array.forEach(element => {
	if(element === 10){
		console.log(element)
	}
})



