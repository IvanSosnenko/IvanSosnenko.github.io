const tachka = document.querySelector('.tachka');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop')
const btnRazv = document.querySelector('.razv');

let ml = 10;
var left_right = "R";
var interval;
var speed = 10;

btnStart.addEventListener('click', () => {
	if (interval != undefined) { 
		speed = speed + 10;
		clearInterval(interval);	
	}
	interval = setInterval(() => {
		tachka.style.marginLeft = ml + 'px';
		if (left_right==="R"){
		ml = ml + 10;
	} else{
		ml = ml - 10;
	}
		console.log(ml);
	}, 1000/speed)
})


let st = 0;

btnStop.addEventListener('click', () => {
	speed = 10;
	clearInterval(interval);	
})




let mr = 10;

btnRazv.addEventListener('click', () => {
	if (left_right === "R") {
		left_right = "L";
		tachka.style.transform="RotateY(180deg)";
	} else {
		left_right = "R";
		tachka.style.transform="RotateY(0deg)";
	}
})

// /setInterval(ФУНКЦИЯ, ВРЕМЯ); // выполнение функции через заданный промежуток времени/

// /setTimeout(ФУНКЦИЯ, ВРЕМЯ); // выполнение функции единожды черезе заданный промежуток времени/

/* --- ФОРМА --- */

const btnForm = document.querySelector('#btnForm');
const btnPassword = document.querySelector('.form_btnPassword');
const fafaIcons = document.querySelector('.fa');
const inputPass = document.querySelector('#password');
const inputEmail = document.querySelector('.email');
const inputName = document.querySelector('.name');
const form = document.querySelector('.form')


btnForm.addEventListener('click' , (event) => {
	event.preventDefault();
	console.log('Check form')
	console.log(inputPass.value)
	if (inputPass.value === '' || inputEmail.value === '' || inputName.value === '') {
		inputPass.classList.add('miganie');		
		inputEmail.classList.add('miganie');
		inputName.classList.add('miganie');
		alert(' заполнить поля!');
		setTimeout(() => {
		inputPass.classList.remove('miganie');		
		inputEmail.classList.remove('miganie');
		inputName.classList.remove('miganie');
		}, 2000)

	} else
	setTimeout(() => {
		
		console.log('Request...');

		setTimeout(() => {
			console.log('Prepparing data...')
		}, 1500)
	}, 1500)
	
});

	

btnPassword.addEventListener('click', (event) => {
	event.preventDefault();

	if (inputPass .type==='password') {
		inputPass .type='text';
		fafaIcons .classList.remove('fa-eye-slash')
		fafaIcons .classList.add('fa-eye')
		//btnPassword.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>'
	} else {
		inputPass .type='password';
		fafaIcons .classList.remove('fa-eye')
		fafaIcons .classList.add('fa-eye-slash')
		//btnPassword.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>'
	}
	
});

const input = {
	value: 'пароль',

}

// btnPassword.addEventListener('mouseover', (event) => {
// 		event.preventDefault();
// 			inputPass .type='text';
// 	});
// btnPassword.addEventListener('mouseout', (event) => {
// 		event.preventDefault();
// 			inputPass .type='password';
// 	});


// const button = document.querySelector(".mybutton");
// console.log(button)
// button.addEventListener('click', () =>{
// 	setTimeout(() => {
// 		console.log('привет')
// 	} , 3000)	
// }  );