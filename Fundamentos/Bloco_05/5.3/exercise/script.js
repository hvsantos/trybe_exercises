function createDaysOfTheWeek() {
	const weekDays = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	const weekDaysList = document.querySelector(".week-days");

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement("li");
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

let decemberDaysList = [
	29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
// Escreva seu código abaixo.

// 🚀 Exercício 1:
// Crie um calendário dinamicamente.

let day_container = document.querySelector("#days");
decemberDaysList.forEach(dayCreate);

function dayCreate(day) {
	let dayToCalendar = document.createElement("li");
	dayToCalendar.className = classNameDay(day);
	dayToCalendar.innerText = day;
	day_container.append(dayToCalendar);
}

function classNameDay(day) {
	let dayClass = "day";
	if (day === 24 || day === 25 || day === 31) {
		dayClass += " holiday";
	}
	if (day === 4 || day === 11 || day === 18 || day === 25) {
		dayClass += " friday";
	}
	return dayClass;
}

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".

function createHolidayButton(name) {
	let holidayButton = document.createElement("button");
	holidayButton.id = "btn-holiday";
	holidayButton.innerText = name;
	document.querySelector(".buttons-container").append(holidayButton);
}

createHolidayButton("Feriados");

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
let holidayButtonHelper = true;

document.querySelector("#btn-holiday").addEventListener("click", callHoliday);

function callHoliday(event) {
	let holidays = document.querySelectorAll(".holiday");
	if (holidayButtonHelper) {
		markHolidays(holidays, holidayButtonHelper);
		holidayButtonHelper = false;
	} else {
		markHolidays(holidays, holidayButtonHelper);
		holidayButtonHelper = true;
	}
}

function markHolidays(holidays, helper) {
	let backcolor = "#eeeeee";
	if (helper) {
		backcolor = "#D0F1C4";
	}
	for (let i = 0; i < holidays.length; i += 1) {
		holidays[i].style.backgroundColor = backcolor;
	}
}

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".

function createFridayButton(name) {
	let fridayButton = document.createElement("button");
	fridayButton.id = "btn-friday";
	fridayButton.innerText = name;
	document.querySelector(".buttons-container").append(fridayButton);
}

createFridayButton("Sexta-feira");

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.

let fridayButtonHelper = true;

document.querySelector("#btn-friday").addEventListener("click", callfriday);

function callfriday(event) {
	let fridays = document.querySelectorAll(".friday");
	if (fridayButtonHelper) {
		markfridays(fridays, fridayButtonHelper);
		fridayButtonHelper = false;
	} else {
		markfridays(fridays, fridayButtonHelper);
		fridayButtonHelper = true;
	}
}

function markfridays(fridays, helper) {
	let backcolor = "#eeeeee";
	if (helper) {
		backcolor = "#E9BCB6";
	}
	for (let i = 0; i < fridays.length; i += 1) {
		fridays[i].style.backgroundColor = backcolor;
	}
}

// 🚀 Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

document.querySelector("#days").addEventListener("mouseover", waitForOver);
document.querySelector("#days").addEventListener("mouseout", waitForOut);

function waitForOver(event) {
	let list = event.target.className;
	if (list.includes("day")) {
		event.target.style.fontSize = "30px";
	}
}

function waitForOut(event) {
	let list = event.target.className;
	if (list.includes("day")) {
		event.target.style.fontSize = "20px";
	}
}

// 🚀 Exercício 7:

// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

document.querySelector("#btn-add").addEventListener("click", createTask);

function createTask() {
	let input = document.querySelector("#task-input").value;
	document.querySelector("#task-input").value = "";
	if (input === "") {
		return alert("Insira um nome para a tarefa");
	}
	addToTaskList(input);
}

function addToTaskList(input) {
	let nova_task = document.createElement("span");
	let line_break = document.createElement("br");
	nova_task.innerText = input;
	document.querySelector(".my-tasks").append(nova_task);
	document.querySelector(".my-tasks").append(line_break);
}

// 🚀 Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
