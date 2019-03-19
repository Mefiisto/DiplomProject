document.addEventListener("DOMContentLoaded", function() {
	let	createBtn = document.getElementById("popup-btn"),
		overlay = document.getElementsByClassName("overlay")[0],
		mainBlock = document.getElementsByClassName("main")[0],
		customBlock = document.getElementsByClassName("custom")[0];



	// Убираем оверлей и карточку персонажей, отображаем блок кастомизации

	createBtn.addEventListener("click", Start);

	function Start() {
		overlay.classList.add("bounceOut", "animated");
		mainBlock.classList.add("fadeOutDownBig", "animated");

		setTimeout(function() {
			overlay.style.display = "none";
			mainBlock.style.display = 'none';
			customBlock.style.display = 'flex';
			for ( let i = 0; i < customBlock.children.length; i++) {
				customBlock.children[i].style.display = 'block';
			}
			customBlock.classList.add("fadeInUp", "animated");
		}, 1000);

		setTimeout(function() {
			overlay.classList.remove("bounceOut", "animated");
			mainBlock.classList.remove("fadeOutDownBig", "animated");
			customBlock.classList.remove("fadeInUp", "animated");

		}, 4000);
	}




	let skinSlider = document.querySelector(".skin"),
		skinItem = skinSlider.getElementsByClassName("skin-color"), 
		skinPrev = skinSlider.querySelector(".prev"),
		skinNext = skinSlider.querySelector(".next"),

		hairSlider = document.querySelector(".hair"),
		hairItem = hairSlider.getElementsByClassName("hair-style"),
		hairPrev = hairSlider.querySelector(".prev"),
		hairNext = hairSlider.querySelector(".next"),

		clotheSlider = document.querySelector(".clothes"),
		clothesItem = clotheSlider.getElementsByClassName("clothes-style"),
		clothesPrev = clotheSlider.querySelector(".prev"),
		clothesNext = clotheSlider.querySelector(".next"),
		slideIndex = 1;



	// Блок кастомизации персонажа

		// Левый блок
	let name = document.getElementById("name"),
		age = document.getElementById("age"),
		sex = document.querySelectorAll("input[name='sex']"),
		politView = document.getElementById("select"),
		bio = document.getElementById("bio"),
		nameValue,
		ageValue,
		politViewValue = politView.options[politView.selectedIndex].value,
		sexValue = "Мужской",
		bioValue;

	let skin = document.getElementById("person-skin"),
		clothes = document.getElementById("person-clothes"),
		hair = document.getElementById("person-hair");

// Функция добавление ошибки над окном
	function ErrorInputs(text, childNumb) {
		let createError = document.createElement('p');
		createError.className = "inputError";
		createError.innerHTML = `Введите ${text} правильно!`;
		createError.style.color = '#fff';
		name.parentNode.insertBefore(createError, childNumb);

		let nameError = name.parentNode.getElementsByClassName("inputError");
		for (let i = 0; i < nameError.length; i++) {
			if (nameError[i].nextSibling == nameError[i+1]) {
				name.parentNode.removeChild(nameError[i+1]);
			}
		}
	}
		


	name.addEventListener("change", function() { 								// Ввод имени
		if ( !isNaN( +name.value / 2) || name.value.length < 2) {
			name.value = '';
			ErrorInputs("имя", name);
		} else {
			nameValue = name.value;

			let nameError = name.parentNode.querySelector(".inputError");
			if (name.previousSibling == nameError) {
				name.parentNode.removeChild(nameError);
			}
		}
	});



	age.addEventListener("change", function() {												// Ввод возораста
		if (isNaN( +age.value / 2) || age.value == "" || age.value > 100 || age.value < 16 || age.value == " ") {
			age.value = '';
			ErrorInputs("возраст", age);
		} else {
			ageValue = age.value;

			let nameError = name.parentNode.querySelectorAll(".inputError");
			if (age.previousSibling == nameError[0] || age.previousSibling == nameError[1]) {
				age.parentNode.removeChild(age.previousSibling);
			}
		}
	});

	politView.addEventListener("change", function() {                                // Ввод полит.взгляда
		politViewValue = politView.options[politView.selectedIndex].value;
	});

	bio.addEventListener("change", function() { 									// Ввод биографии	
		if ( bio.value == '' || bio.value.length < 5 || bio.value == "  " ) {
			ErrorInputs("биографию", bio);
		} else {
			bioValue = bio.value;

			let nameError = name.parentNode.querySelectorAll(".inputError");
			if (bio.previousSibling == nameError[0] || bio.previousSibling == nameError[1] || bio.previousSibling == nameError[2]) {
				bio.parentNode.removeChild(bio.previousSibling);
			}
		}
	});





// Рандомное призначения героя, при переключения пола
	for (let i = 0 ; i < sex.length ; i++) { 
		sex[i].addEventListener("change", function() {
			let randMskin = 1 + Math.round(Math.random() * 2),
			randMclosthes = 1 + Math.round(Math.random() * 2),
			randMhair = 1 + Math.round(Math.random() * 2);

			let randfskin = 4 + Math.round(Math.random() * 2),
				randFclothes = 4 + Math.round(Math.random() * 2),
				randFhair = 4 + Math.round(Math.random() * 2);

			sexValue = sex[i].value;
			if (sexValue == "Мужской") {

				skin.style.backgroundImage = `url('img/skin/skin-${randMskin}.png')`;
				for ( let s = 0; s < skinItem.length; s++) {
					skinItem[s].style.display = 'none';
				}
				skinItem[randMskin - 1].style.display = 'block';


				clothes.style.backgroundImage = `url('img/clothes/construct/clothes-${randMclosthes}.png')`;
				for ( let c = 0; c < clothesItem.length; c++) {
					clothesItem[c].style.display = 'none';
				}
				clothesItem[randMclosthes - 1].style.display = 'block';


				hair.style.backgroundImage = `url('img/hair/construct/hair-${randMhair}.png')`;
				for ( let h = 0; h < hairItem.length; h++) {
					hairItem[h].style.display = 'none';
				}
				hairItem[randMhair - 1].style.display = 'block';


			} else {
				skin.style.backgroundImage = `url('img/skin/skin-${randfskin}.png')`;
				for ( let S = 0; S < skinItem.length; S++) {
					skinItem[S].style.display = 'none';
				}
				skinItem[randfskin - 4].style.display = 'block';


				clothes.style.backgroundImage = `url('img/clothes/construct/clothes-${randFclothes}.png')`;
				for ( let c = 0; c < clothesItem.length; c++) {
					clothesItem[c].style.display = 'none';
				}
				clothesItem[randFclothes - 1].style.display = 'block';

				hair.style.backgroundImage = `url('img/hair/construct/hair-${randFhair}.png')`;
				for ( let H = 0; H < hairItem.length; H++) {
					hairItem[H].style.display = 'none';
				}
				hairItem[randFhair - 1].style.display = 'block';

			}
			
		});
	}


// Правый блок (Cлайды)



	// Слайдер переключения цвета кожи
	skinsSlider(slideIndex);

	function skinsSlider(n) {
		if (n > skinItem.length) {
			slideIndex = 1;
		}
		if ( n < 1) {
			slideIndex = skinItem.length;
		}
		for ( let i = 0; i < skinItem.length; i++) {
			skinItem[i].style.display = 'none';
		}
		skinItem[slideIndex - 1].style.display = 'block';

		if (sexValue == "Мужской") {
			if ( n > 3) {
				n = 1;
			} 
			if (n < 1) {
				n = slideIndex;
			}
			skin.style.backgroundImage = `url('img/skin/skin-${n}.png')`;
		} else {
			if ( n > 6) {
				n = 4;
			} 

			if (n < 4) {
				n =  slideIndex + 3;
			}
			skin.style.backgroundImage = `url('img/skin/skin-${n}.png')`;
		}
	}
	function toggleSKins(n) {
		skinsSlider(slideIndex += n);
	}


	// Слайдер переключения волосов
	hairsSlider(slideIndex);

	function hairsSlider(n) {
		if (sexValue == "Мужской") {
			if (n > hairItem.length - 3 ) {
				slideIndex = 1;
			}
			if ( n < 1) {
				slideIndex = hairItem.length - 3;
			}
			for ( let i = 0; i < hairItem.length; i++) {
				hairItem[i].style.display = 'none';
			}
			hairItem[slideIndex - 1].style.display = 'block';
// Переключение волосов на персонаже
			if ( n > 3) {
				n = 1;
			} 
			if (n < 1) {
				n = slideIndex;
			}
			hair.style.backgroundImage = `url('img/hair/construct/hair-${n}.png')`;
			


		} else {
			if (n > hairItem.length ) {
				slideIndex = 4;
			}
			if ( n < 4) {
				slideIndex = hairItem.length;
			}
			for ( let i = 0; i < hairItem.length; i++) {
				hairItem[i].style.display = 'none';
			}
			hairItem[slideIndex - 1].style.display = 'block';
			if ( n > 6) {
				n = 4;
			} 
			if (n < 4) {
				n =  slideIndex ;
			}
			hair.style.backgroundImage = `url('img/hair/construct/hair-${n}.png')`;

		}
	}
	function toggleHair(n) {
		hairsSlider(slideIndex += n);
	}


	// СЛайдер переключения одежды
	clothesSlider(slideIndex);

	function clothesSlider(n) {
		if (sexValue == "Мужской") {
			if (n > clothesItem.length - 3) {
				slideIndex = 1;
			}
			if ( n < 1) {
				slideIndex = clothesItem.length - 3;
			}
			for ( let i = 0; i < clothesItem.length; i++) {
				clothesItem[i].style.display = 'none';
			}
			clothesItem[slideIndex - 1].style.display = 'block';


			//  Переключение одежды на персонаже
			if ( n > 3) {
				n = 1;
			} 
			if (n < 1) {
				n = slideIndex;
			}
			clothes.style.backgroundImage = `url('img/clothes/construct/clothes-${n}.png')`;
			
		} else {
			if (n > clothesItem.length) {
				slideIndex = 4;
			}
			if ( n < 4) {
				slideIndex = clothesItem.length;
			}
			for ( let i = 0; i < clothesItem.length ; i++) {
				clothesItem[i].style.display = 'none';
			}
			clothesItem[slideIndex - 1].style.display = 'block';

			if ( n > 5) {
				n = 4;
			} 
			if (n < 4) {

				n =  slideIndex;
			}
			clothes.style.backgroundImage = `url('img/clothes/construct/clothes-${n}.png')`;
			

		} 
	}

	function toggleClothes(n) {
		clothesSlider(slideIndex += n);
	}

	function startSliders() {

		skinNext.addEventListener("click", function() {    // Переключение кожи вперед
				toggleSKins(1);			
		}); 

		skinPrev.addEventListener("click", function() {		// Переключение кожи назад
				toggleSKins(-1);			
		}); 



		hairNext.addEventListener("click", function() {			// Переключение волос вперед
				toggleHair(1);		
		}); 
		hairPrev.addEventListener("click", function() {			// Переключение волос назад
				toggleHair(-1);			
		}); 


		clothesNext.addEventListener("click", function() {			// Переключение одежды вперед
			toggleClothes(1);			
		}); 
		clothesPrev.addEventListener("click", function() {			// Переключе одежды назад
			toggleClothes(-1);	

		}); 
	}


	startSliders();






// БЛОК ПЕРЕХОДА НА ЭКРАН С КАРТОЧКАМИ

	let card = document.getElementsByClassName("main-cards-item"),
		readyBtn = document.getElementById("ready"),
		result,
		resultCount,
		resultBar;


	readyBtn.addEventListener("click",  function() {
		let nameEmpty = '',
			ageEmpty = '',
			bioEmpty = '';


			if ( !isNaN( +name.value / 2) || isNaN( +age.value / 2) || age.value == "" || age.value > 100 || age.value < 18  || age.value == " " ||  bio.value == '' || bio.value.length < 5 || bio.value == "  ") {
				if (!isNaN( +name.value / 2)) {
					nameEmpty = " Имя";
				}
				if (isNaN( +age.value / 2) || age.value == "" || age.value > 100 || age.value < 18  || age.value == " ") {
					ageEmpty = " Возраст";
				}
				if (bio.value == '' || bio.value.length < 5 || bio.value == "  ") {
					bioEmpty = " Биография";
				}

				alert(`Вы ввели не правильно следующие данные:${nameEmpty} ${ageEmpty} ${bioEmpty}`); 
			} else {
				openMain();
				saveResults();
			}
			nullResalts();
	});

	function saveResults() {
		let userCard = card[0].cloneNode(true),
			cardBlock = document.getElementsByClassName("main-cards")[0],
			candidateBlock = userCard.querySelector(".candidate-block"),			
			userImages = customBlock.getElementsByClassName("person")[0],
			// Перменные карточки кандидата
			userImg = userImages.cloneNode(true),
			userName = userCard.querySelector(".name"),
			userAge = userCard.querySelector(".age"),
			userSex = userCard.querySelector(".sex"),
			userViews = userCard.querySelector(".views"),
			userBio = userCard.querySelector(".bio");

			// Оставляем 3 карточки, все остальные удаляем
			for(let i = 2; i < card.length; i++) {
				card[i].parentNode.removeChild(card[i]);
			}

			// Создание карточки
			cardBlock.insertBefore( userCard, cardBlock.children[2]);
			// Перенос инфы в карточку

			candidateBlock.removeChild(candidateBlock.children[0]); 					// Удаляем стандартное изображение	
			candidateBlock.insertBefore(userImg, candidateBlock.children[0]);	//Вставляем изображение из кастомного экрана"
			
			userName.innerHTML = `${nameValue}`;								// Вставляем имя в блок с кандидатом					
			userSex.innerHTML = `${sexValue}`;									// Вставляем пол в блок с кандидатом
			userViews.innerHTML = `${politViewValue}`;							// Вставляем полит.взгляды в блок с кандидатом
			userBio.innerHTML = `${bioValue}`;									// Вставляем биографию в блок с кандидатом

			if (ageValue % 10 == 1) {
				userAge.innerHTML = `${ageValue} год`;		
			} else if (ageValue % 10 > 1 && ageValue % 10 < 5 ) {
				userAge.innerHTML = `${ageValue} года`;	
			} else {
				userAge.innerHTML = `${ageValue} лет`;	
			}
		}
	function openMain() {
		// Переход на экран с блоками 
		customBlock.classList.add("bounceOutLeft", "animated");


		setTimeout(function() { 
			customBlock.style.display = 'none';
			for ( let i = 0; i < customBlock.children.length; i++) {
				customBlock.children[i].style.display = 'none';
			}
			mainBlock.style.display = 'block';
			mainBlock.classList.add("fadeInDown", "animated");
		}, 2000);

		setTimeout(function() {
			mainBlock.classList.remove("fadeInDown", "animated");
			customBlock.classList.remove("bounceOutLeft", "animated");
		}, 4000);
	}


	function nullResalts() {

		// Функция обнуление результатов
		for (let i = 0; i < card.length; i++) {
		let	result = card[i].querySelector(".result"),
			resultCount = result.querySelector(".result-count"),
			resultBar = result.querySelector(".progress-bar");
			resultCount.innerHTML = "0%";
			resultBar.style.height = "0%";
		}
	}


// Переход на блок кастомизации, при нажатии на кнопку "Сбросить результаты"
	let reset = document.getElementById("reset");
	reset.addEventListener("click", function() {
		Start();
	});





	function Voting(event) {
		let	resultCount = mainBlock.querySelectorAll(".result-count"),
			resultBar = mainBlock.querySelectorAll(".progress-bar");
		if (event.target == crime) {
			if (firstBar + 25 >= 100){
				firstBar = 100;
			} else {
				firstBar = firstBar + 25;
			}
			secondBar =  Math.random() * (100 - firstBar);
 			thirdBar = 100 - (secondBar + firstBar);
			for (let i = 0; i < card.length; i++) {
					resultCount[0].innerHTML = `${thirdBar.toFixed(2) }%`;
					resultBar[0].style.height = `${thirdBar.toFixed(2)}%`;
					resultCount[1].innerHTML = `${secondBar.toFixed(2)}%`;
					resultBar[1].style.height = `${secondBar.toFixed(2)}%`;
					resultCount[2].innerHTML = `${(firstBar).toFixed(2)}%`;
					resultBar[2].style.height = `${(firstBar).toFixed(2)}%`;
					card[i].classList.remove("main-cards-item-active");
				}
			} else {
			// Функция голосования результатов
			for (let i = 0; i < card.length; i++) {
					resultCount[0].innerHTML = `${thirdBar.toFixed(2)}%`;
					resultBar[0].style.height = `${thirdBar.toFixed(2)}%`;
					resultCount[1].innerHTML = `${secondBar.toFixed(2)}%`;
					resultBar[1].style.height = `${secondBar.toFixed(2)}%`;
					resultCount[2].innerHTML = `${firstBar.toFixed(2)}%`;
					resultBar[2].style.height = `${firstBar.toFixed(2)}%`;	
					card[i].classList.remove("main-cards-item-active");
			}
		}
 		if (firstBar == Math.max(firstBar, secondBar, thirdBar)) {
 			card[2].classList.add('main-cards-item-active');
 		} else if(secondBar == Math.max(firstBar, secondBar, thirdBar)) {
 			card[1].classList.add('main-cards-item-active');
 		} else if(thirdBar == Math.max(firstBar, secondBar, thirdBar)) {
 			card[0].classList.add('main-cards-item-active');
 		}
	}


// Проведение выборов
	let callVoting = document.getElementById("voting"),
		crime = document.getElementById("crime");

	let firstBar = Math.random() * 100,
		secondBar =  (100 - firstBar) * Math.random(),
		thirdBar = 100 - (secondBar + firstBar);

	callVoting.addEventListener("click", function(event) {
		firstBar = Math.random() * 100,
		secondBar =  (100 - firstBar) * Math.random(),
		thirdBar = 100 - (secondBar + firstBar);
		Voting(event);
		crime = document.getElementById("crime");
	});



// Жульничество 

 crime.addEventListener("click", function(event) {
 	if (crime == undefined) {
 		alert("Жульничать можно только один раз за выборы! Жульничайте на следующих выборах!)");
 	}
 });

crime.addEventListener("click", function(event) {
	Voting(event);
	crime = undefined;  
});


});