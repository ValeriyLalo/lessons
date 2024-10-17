// Строгий режим
"use strict"

// console.log(navigator.userAgentData.platform)

// let widthBrauser = innerWidth
// console.log(widthBrauser);
// widthBrauser = innerHeight
// console.log(widthBrauser);

/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром')
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox')
}
*/
// console.log(navigator.userAgent)

// Інформація про систему
// console.log(navigator.userAgentData)
// Мобілка?
// console.log(navigator.userAgentData.mobile)
// Платформа
// console.log(navigator.userAgentData.platform)


// alert('Привіт! Ви хочете продовжити перегляд сайту?')
// confirm('Привіт! Ви хочете продовжити перегляд сайту?')

// const confirmAnswer = confirm('Привіт! Ви хочете продовжити перегляд сайту?')
// console.log(confirmAnswer)
// if (confirmAnswer) {
// 	alert('Привіт! Гарного перегляду!')
// } else{
// 	alert('Дякую! Допобачення!')
// }

// Location
// Адресний рядок браузера

// console.log(location)
// console.log(location.href)
// console.log(location.hash)

// const cleanHash = location.hash.replace("#", "")
// console.log(cleanHash);

// if (cleanHash === "popup") {
// 	//...
// }

// confirmAnswer ? alert('Привіт! Гарного перегляду!') : alert('Дякую! Допобачення!')

// const promptAnswer = prompt('Привіт! Ви хочете продовжити перегляд сайту?')
// console.log(promptAnswer)

// if(promptAnswer === null){
// 	console.log('Юзер натиснув cansel')
// } else if(promptAnswer){
// 	console.log(`Відповідь користавача: ${promptAnswer}`)
// } else{
// 	console.log('Користувач не надав відповідь')
// }
	

// const htmlElement = document.documentElement
// console.log(htmlElement);

// const headElement = document.head
// console.log(headElement);

// const bodyElement = document.body
// console.log(bodyElement);

// const bodyElement = document.body
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// console.log(firstChild)
// console.log(lastChild)

// const bodyElement = document.body
// const childNodes = bodyElement.children

// for (let index = 0; index < childNodes.length; index++) {
// 	console.log(childNodes[index])
// }

// console.log(childNodes)


// for (let childNode of childNodes) {
// 	console.log(childNode)
// }

// const bodyElement = document.body
// const previousSibling = bodyElement.previousElementSibling
// const nextSibling = bodyElement.nextElementSiblingElementSibling
// console.log(previousSibling)
// console.log(nextSibling)



// const liElement = document.querySelector('li')
// console.log(liElement)
// if (lastElement) {
// 	console.log(`елемент присутній`)
// } else{
// 	console.log(`елемент відсутній`)
// }

// const liElements = document.querySelectorAll('li')
// console.log(liElements)

// liElements.forEach(liElement => {
// 	console.log(liElement)
// })

// if(liElements.length){

// 	liElements.forEach((item, index) => {
// 		console.log(item)
// 	})
// }

// const liElements = document.querySelectorAll('.list__item.active')
// console.log(liElements)
// if(liElements.length){

// 	liElements.forEach((item, index) => {
// 		console.log(item)
// 	})
// }

// const listElements = document.querySelector('.list')
// const parentElement = listElements.parentElement
// console.log(parentElement)

// const listItem = document.querySelector('.list__item')
// const parentElement = listItem.closest('.wrapper')
// const parentElement = listItem.closest('.active')
// console.log(parentElement)

// const listItem = document.querySelectorAll('.list__item')

// 	listItem.forEach((listItem, index) => {
// 	listItem.innerHTML = `<span>Привіт! №${index}</span>` 	//працює з тегами
// 	listItem.textContent = `<span>Привіт! №${index}</span>` //не працює з тегами
// });

//Cтворення об'єктів

// const bodyElement = document.body
// console.log(bodyElement);

// const newElement = document.createElement('div')
// newElement.innerHTML =`<span>Привіт!</span>`

// console.log(newElement);

// const pages = document.querySelector('.list')
// pages.before(newElement)
// pages.after(newElement)
// pages.prepend(newElement)
// pages.append(newElement)

// const page = document.querySelector('.page')

// let template = `<div class="block">`
// if (page) {
// 	template += `<span>Сторінка існує!</span>`
// }
// template +=`</div>`

// console.log(template)
// page.innerHTML += template
// page.insertAdjacentHTML('afterbegin', template)
// page.insertAdjacentHTML('afterend', template)
// page.insertAdjacentHTML('beforebegin', template)
// page.insertAdjacentHTML('beforeend', template)

// page.insertAdjacentText('afterbegin', template)
// page.insertAdjacentText('afterend', template)
// page.insertAdjacentText('beforebegin', template)
// page.insertAdjacentText('beforeend', template)

// page.insertAdjacentElement('afterbegin', newElement )
// page.insertAdjacentElement('afterend', newElement )
// page.insertAdjacentElement('beforebegin', newElement )
// page.insertAdjacentElement('beforeend', newElement )

// page.insertAdjacentHTML('beforeend', 
// 	`<div class="new-element"><span>Новий елемент!</span></div>`
// )


// const list = document.querySelector('.list')
// const header = document.querySelector('header')
// const ol = document.querySelector('ol')

// header.insertAdjacentElement('beforeend', list)
// header.insertAdjacentElement('afterend', ol)


// const page = document.querySelector('.page')
// const clonePage = page.cloneNode()
// const clonePage = page.cloneNode(true)
// console.log(clonePage);
// page.insertAdjacentElement('beforebegin', clonePage)


// const list = document.querySelector('.list')
// list.remove()
// const ol = document.querySelector('ol')
// ol.remove()

//стилі та класи
// className(перезапис)


// const list = document.querySelector('.list')
// list.className = `.list-new`
// const ol = document.querySelector('ol')
// ol.className = `.list-ol`

// const olLi = document.querySelector('li')
// olLi.className = `.li-ol`

// classList(метод роботи з класом)

// const list = document.querySelector('.list')
// list.classList = `.list-new`
// list.classList.add('red') 
// list.classList.remove('active') 
// list.classList.toggle('active') 
// list.classList.contains('active') //перевіряє чи є клас у об'єкта
// if(list.classList.contains('active')){
// 	console.log('Клас є!')
	
// }

//Управління стилями

//style
// const list = document.querySelector('.list')
// list.style.padding = `50px`
// list.style.color = `#ffffff`
// list.style.fontSize = `30px`
// list.style.background = `#ff6f61`

//перезапис стилів на вказані
// list.style.cssText = `
	// background: #808080;
	// font-style: italic;
	// font-weight: 600;
	// font-size:50px;
	// color: #f4f4f5;
// `

//отримання стилю та його значення(getComputedStyle)

// const list = document.querySelector('.list')
// const listStyle = getComputedStyle(list)
// const listStyleFontSize = listStyle.fontSize
// const listStyleFontSize = parseFloat(listStyle.fontSize)
// console.log(listStyle );
// console.log(listStyleFontSize);
// console.log(typeof listStyleFontSize);

//робота з атрибутами

// const list = document.querySelector('.list')

// list.hasAttribute('name') //перевіряє його наявність
// console.log(list.hasAttribute('class'))

// list.getAttribute('name') //отримуємо значення
// console.log(list.getAttribute('class'))

// list.setAttribute('name', 'value')//встановлюємо значення
// list.setAttribute('class', 'new-class') 
// list.setAttribute('title', 'Підказка') 

// list.removeAttribute('name') //видаляємо атрибут
// list.removeAttribute('title')



// Data атрибути

// const list = document.querySelector('.list')

// const speed =list.dataset.speed							//рядок
// console.log( speed)
// console.log(typeof speed)

// const speed = parseFloat(list.dataset.speed) || 500 //число
// console.log( speed)
// console.log(typeof speed)

// const direction = list.dataset.direction || "left"  //Значення за замовченням - ||
// console.log(direction)

// const scrollSpeed = +list.dataset.scrollSpeed || 100

// if(list.hasAttribute('data-scroll-animate')){
// 	console.log("працюємо")
// }else{
// 	console.log("йдемо далі")
// }

// if(direction === 'left'){

// }else {

// }


//корисні властивості

// const list = document.querySelector('.list')

//отримання імені тега

// console.log(list.tagName)
// if(list === 'UL'){
// }else{
// }


//атрибут hidden( приховує )
// list.hidden = true

//розміри та координати

//Розміри вікна браузера(з полосами прокрутки)
//об'єкт window

// const windowWidth = window.innerWidth
// const windowHeight = window.innerHeight
// console.log( windowWidth)
// console.log( windowHeight)


//Розміри вікна браузера(без полос прокрутки)
//об'єкт body
// clientWidth та clientHeight

// const mainElement = document.body
// const windowClientWidth = mainElement.clientWidth
// const windowClientHeight = mainElement.clientHeight
// console.log(windowClientWidth)
// console.log(windowClientHeight)
// const textStyle = document.querySelector('.text')
// textStyle.style.cssText = `
// 	color:#fff;
// 	line-height: 1.5;
// 	word-spacing: 3px;
// 	font-size: 20px;
// 	background-color: chocolate;
// 	padding: 10px;
// `
// let a = 826
// let b = 809
// let resultWidthScloll = a - b
// console.log(resultWidthScloll)


// кількісь прокручених рх(пікселів)
//об'єкт window

// const windowScrollTop = window.scrollY
// const windowScrollLeft = window.scrollX
// console.log(windowScrollTop)
// console.log(windowScrollLeft)


//window.scrollTo({options})
//прокрутка на вказані координати

// window.scrollTo({
// 	top:1000,
// 	left:0,
// 	behavior: "smooth" //Safari не працює
// })

// elem.scrollIntoView();
// Проктурка до об'єкту
/*
const list = document.querySelector('.list')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: block,
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(list);
*/

// Позиція об'єкта
// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (transform, або position absolute, relative, fixed чи sticky)
// відносно якого рахується кординати

// const list = document.querySelector('.list')
// const listLeftPos = list.offsetLeft
// const listTopPos = list.offsetTop

// console.log(listLeftPos)
// console.log(listTopPos)

// Координати відносно вікна браузера
// getBoundingClientRect
/*
const list = document.querySelector('.list')
console.log(list.getBoundingClientRect().top)
console.log(list.getBoundingClientRect().left)
*/

// Загальні розміри елемента (без зовнішніх відступів)
// offsetWidth и offsetHeight

// const list = document.querySelector('.list')
// console.log(list.offsetWidth)
// console.log(list.offsetHeight)

/*
// Intersection Observer API
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/

/*
NodeList, HTMLCollection, Array

const list = document.querySelector('.list')
const listItems = document.querySelectorAll('.list__item')
// const listItems = list.children
list.insertAdjacentHTML('beforeend', `<li class="list__item">6</li>`)

// Перевід колекції в масив
const listItemsArray = Array.from(listItems)
console.log(listItemsArray)
*/



// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)


// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// function addListToBody() {
// 	// Створюємо елемент ul
// 	const ul = document.createElement('ul');

// 	// Створюємо масив з пунктами списку
// 	const items = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];

// 	// Додаємо кожен пункт до ul
// 	items.forEach(itemText => {
// 		 const li = document.createElement('li'); // Створюємо новий елемент li
// 		 li.textContent = itemText; // Встановлюємо текст пункта
// 		 ul.appendChild(li); // Додаємо li до ul
// 	});

// 	// Додаємо ul до body
// 	document.body.appendChild(ul);
// }

// // Викликаємо функцію, щоб додати список на сторінку
// addListToBody();


function addListToBody( number = 1) {
	const list = document.createElement('ul')
	for (let index = 0; index < number; index++) {
		const item = document.createElement('li') ;
		item.textContent = `Привіт!!! `
		item.style.cssText = `
			font-size: 20px;
			text-align: center;
			color: #ff6f61;
			margin-bottom: 10px;
			background-color: #eeeeee;
		`
		list.appendChild(item)

	}
	document.body.prepend(list)
}
addListToBody(5)

 

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

const textColor = document.querySelector('.page__text-color')

textColor.classList.add("loaded")
if (textColor.classList.contains('loaded')){
	textColor.style.color = `green`
} 


// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemElement = document.querySelectorAll(".item")

itemElement.forEach((item, index) => {
	item.classList.add("active")
	item.textContent = `Елемент №${index + 1}`
	item.style.marginBottom = "10px"
	item.style.color = "yellow"
})



// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.page__button')
function scrollToBlock(element) {
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
		block: block,
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}
scrollToBlock(button);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Потім отримати значення атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// const dataAttribute = document.querySelector('')
// //Перевіряємо наявність атрибута.
// dataAttribute.hasAttribute('name')
// console.log(dataAttribute.hasAttribute('data'))
// //Получаємо значення атрибута.
// list.getAttribute('name')


const pageLink = document.querySelector('.page__link')
pageLink.setAttribute('data', '100')
const dataValue = parseFloat(pageLink.getAttribute('data'))
console.log(dataValue);
if(dataValue < 200){
	pageLink.style.color = 'red'
}

