// Строгий режим
"use strict"

// Події
// Синтаксис події
// elem/document.addEventListener("ім'я події", func, options)
// elem/document.addEventListener("ім'я події", ()=>{ code }, options)

// const button = document.querySelector('.button')

// button.addEventListener("click", () => {
// 	code
// 	alert("Click!")
// 	button.style.backgroundColor = "yellow"
// 	button.style.color = "black"
// })

// Натискання
// button.addEventListener("click", setStyle)
// Наведення миші
// button.addEventListener("mouseenter", setStyle)
// Втрата наведення миші
// button.addEventListener("mouseleave", setStyle)
// Рух миші
// button.addEventListener("mousemove", setStyle)

// function setStyle() {
// 	button.style.backgroundColor = "yellow"
// 	button.style.color = "black"
// }

// ....code...
// setStyle()


// const buttons = document.querySelectorAll('.button')



// buttons.forEach(button => {
// 	button.addEventListener("click", () => {
// 		button.style.backgroundColor = "yellow"
// 		button.style.color = "black"
// 	})
// })  

// Делегування події
// document.addEventListener("click", () => {
// console.log('click');
// })

// document.addEventListener("click", (event) => {
// console.log(event);
// })

// document.addEventListener("click", setStyle )

// function  setStyle (e){
// 	console.log(e);
// }

// document.addEventListener("click", documentAction)

// document.addEventListener("mousemove", documentAction)

// function documentAction(e) {
	
// // 	console.log(e)
// // 	console.log(e.type)
// 	// console.log(e.target)

// 	/*
// 	if (e.type === "click") {
// 		// ...
// 	} else if (e.type === "mouseenter") {
// 		// ...
// 	}
// 	*/

// 	// const tag = e.target.tagName;
// 	// if (tag === "BUTTON") {
// 	// 	alert('BUTTON')
// 	// }


// 	// Два кроки
// 	// Крок №1 отримання об'єкту взаєдії
// 	const elementTarget = e.target
// 	// Крок №2 перевірка - чи є об'єкт взаєдії
// 	// тим який нам потрібен


// 	if (elementTarget.closest('.button')) {
// 		// elementTarget.classList.toggle('active')
		
// 		const currentElement = elementTarget.closest('.button')
// 		currentElement.classList.toggle('active')
// 	}

// 	if (elementTarget.closest('.button-list')) {
// 		elementTarget.classList.toggle('active')	
// 		const currentElement = elementTarget.closest('.button-list')
// 	}

	// if (elementTarget.closest('.block') && e.type === "mousemove") {
	// 	const currentElement = elementTarget.closest('.block')
	// 	console.log(e.clientX - currentElement.offsetLeft)
	// 	console.log(e.clientY - currentElement.offsetTop)
	// 	 console.log(e.clientX)
	// 	 console.log(e.clientY )
	// 	console.log('000');
	// }



	// Відміна дії за замовченням HTML тегу
// 	e.preventDefault()
// }

// const page = document.querySelector('.page')
// page.insertAdjacentHTML("beforeend", `<button type="button" class="button">Add Click!</button>`)
// page.insertAdjacentHTML("beforeend", `<button type="button" class="button">Add Click!</button>`)


// Тип події
//console.log(e.type);
// Об'єкт на якому відбулась подія
//console.log(e.target);
// Положення курсора по осі X відносно вікна
//console.log(e.clientX)
// Положення курсора по осі Y відносно вікна
//console.log(e.clientY)
// Положення курсора по осі X відносно документу
//console.log(e.pageX)
// Положення курсора по осі Y відносно документу
//console.log(e.pageY)



// Основні події миші
/*
click, mouseenter, mouseleave, mousemove
*/

// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші


// Scroll
// window.addEventListener("scroll", func);


// const block = document.querySelector('.block')
// window.addEventListener("scroll", windowScroll)

// function windowScroll(e) {
// 	if (block.getBoundingClientRect().top - window.innerHeight <= 0) {
// 		console.log('Видно!');
// 	}

// 	console.log(window.scrollY)
// 	console.log(window.scrollX)
// }


//Intersection Observer API
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


// const options = {
// 	root: null,
// 	rootMargin: "0px 0px 0px 0px",
// 	// Відсоток від розміру об'єкту.
// 	// При появі якого спрацьовує подія
// 	// Де 0 це будь яка поява
// 	// 100 це повна поява об'кта в в'юпорті
// 	threshold: 0.5,
// }

// const callback = (entries, observer) => {
// 	entries.forEach(entry => {
// 		const currentElement = entry.target
// 		if (entry.isIntersecting) {
// 			currentElement.classList.add('animate')
// 			// console.log('я тебе бачу')
// 		} else {
// 			currentElement.classList.remove('animate')
// 			// console.log('я тебе не бачу')
// 		}
// 	})
// }

// const observer = new IntersectionObserver(callback, options)

// // якщо один об'єкт
// const target = document.querySelector(".button")
// observer.observe(target)

// const animElements = document.querySelectorAll('[class*="--anim"]')
// animElements.forEach(animElement => {
// 	observer.observe(animElement)
// })


// Завантаження
/*
браузер повністю завантажив HTML,
було побудовано DOM-дерево, але зовнішні ресурси,
такі як картинки <img> і стилі,
можуть бути ще не завантажені.
*/

// window.addEventListener("DOMContentLoaded ", domLoaded)
// function domLoaded(e) {

// }


/*
браузер завантажив HTML і зовнішні ресурси
(картини, стилі і т.д.).
*/

// window.addEventListener("load", pageLoaded);
// function pageLoaded(e) {
// 	// ALL CODE
// 	document.documentElement.classList.add('loaded')
// }

// Таймер

// function someFunc() {
// 	console.log('go go go')
// }
// Затримка виконання коду

// setTimeout(() => {
// 	someFunc()
// }, 1000)



// Інтервал
// setInterval()

// Зупинка інтервалу
//clearInterval(timer)

// let i = 5;
// let timer = setInterval(() => {
// 	console.log(i)
// 	i === 1 ? clearInterval(timer) : null
// 	--i
// }, 1000)



// AJAX

// async function getData() {
// 	const response = await fetch("data/info.json", {})
	
// 	if (response.ok) {
// 		const result = await response.json()
// 		initData(result)
// 		console.log(result)
// 	} else {
// 		alert('помилака')
// 	}
// }
// getData()


// function initData(data) {
// 	const page = document.querySelector('.page')
// 	for (const item in data) {
// 		console.log(data[item]);

// 		page.insertAdjacentHTML("afterbegin", `<p>${data[item]}</p>`)
// 	}
	// console.log(data.name);
	// console.log(data.age);
	

	
// }


// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

/*
async function getMeteoData() {
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1", {})
	if (response.ok) {
		const result = await response.json()
		initData(result)
	} else {
		alert('помилака')
	}
}
getMeteoData()

function initData(data) {
	data.hourly.temperature_2m.forEach(temp => {
		console.log(temp)
	});
}
*/

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

document.addEventListener("click", documentAction)
function documentAction(e) {
	const elementTarget = e.target
	if (elementTarget.closest('.item')) {
		const currentElement = elementTarget.closest('.item')
		currentElement.classList.toggle('active')
	}
	e.preventDefault()
}





// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.


window.addEventListener('load', bodyLoaded);
function bodyLoaded(e) {
	document.body.classList.add('loaded')
}


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.


// const header = document.querySelector('header')
// const footer = document.querySelector('footer')

// header.addEventListener('mouseover', () => {
// 	footer.style.backgroundColor = 'red'
// })

const header = document.querySelector('header')
const footer = document.querySelector('footer')

if (footer && header) {
	header.addEventListener('mouseover', () => {
		footer.style.background = 'radial-gradient(circle, rgba(251,231,63,1) 0%, rgba(89,231,173,1) 14%, rgba(185,86,202,1) 34%, rgba(185,83,83,1) 46%, rgba(80,175,174,1) 59%, rgba(104,76,203,1) 74%, rgba(70,252,159,1) 100%)'
	})
	header.addEventListener('mouseleave', () => {
		footer.style.background = ''
	})
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.







// const options = {
// 	root: null,
// 	rootMargin: "0px 0px 0px 0px",
// 	threshold: 0.5,
// }


// let callback = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		const targetElement = entry.target;
// 		const itemElement = document.querySelector('.box__item')
		
// 		if (entry.isIntersecting) {
// 			targetElement.classList.add("animate");
// 			console.log("елемент видно");
// 			if (itemElement) {
// 				const time = parseFloat(itemElement.dataset.time) || 1000
// 				const value = parseInt(itemElement.dataset.value) || 10
// 				let i = 0
// 				let timer = setInterval(() => {
// 					console.log(i)
// 					i >= value ? clearInterval(timer) : i += 1
// 					itemElement.innerHTML = i
// 				}, time)
// 				observer.unobserve(itemElement)
// 				// console.log(observer);
				
// 			}
// 		} else {
// 			targetElement.classList.remove("animate");
// 			console.log("елемент не видно");
// 		}
// 	})
// }

// let observer = new IntersectionObserver(callback, options);

// // let someElements = document.querySelectorAll(".box");
// // someElements.forEach(someElement => {
// // 	observer.observe(someElement);
// // })
// const parentElement = document.querySelector(".box")
// observer.observe(parentElement)







// /**
//  * Розпочинає відлік використовуючи значення
//  * атрибутів елемента data-max і data-delay
//  *
//  * @param {HTMLElement} element
//  */
function doCountingInElement(element) {
	const maxCount = parseInt(element.dataset.max) || 10
	const delaySeconds = parseFloat(element.dataset.delay) || 1
	let currentCount = 0 // Початковий відлік
 
	const interval = setInterval(() => {
		currentCount += 1
		element.textContent = currentCount
 
		// Зупинити відлік при досягненні maxCount
		if (currentCount === maxCount) {
			clearInterval(interval)
		}
	},	delaySeconds * 1500)
}
 
//  /**
//   * При виявленні елемента у viewport - додає клас
//   * .intersecting, запускає анімацію та прибирає
//   * стеження.
// //   *
//   * @param {IntersectionObserverEntry} entry
//   * @param {IntersectionObserver} observer
//   * @param {HTMLElement} element
//   */
 function handleIntersection(entry, observer, element) {
	if (!entry.isIntersecting) return
 
	// Якщо видно елемент
	entry.target.classList.add('intersecting')
	observer.unobserve(entry.target)
	doCountingInElement(element)
	childElement.classList.add('animate')
}
 
//  /**
//   * Наглядає за елментом та анімує
//   * дочірній
//   *
//   * @param {HTMLElement} parentElement
//   * @param {HTMLElement} childElement
//   */
 function watchParentAndAnimateChild(parentElement, childElement) {
	if (!parentElement) return
	if (!childElement) return
 
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				handleIntersection(entry, observer, childElement)
			
			})
		},
		{ threshold: 0.8 },
	)
 
	observer.observe(parentElement)
}

const parentElement = document.querySelector('.box')
const childElement = document.querySelector('.box__item')

watchParentAndAnimateChild(parentElement, childElement)