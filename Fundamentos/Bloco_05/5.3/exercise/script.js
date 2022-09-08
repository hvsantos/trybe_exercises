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

function createHolidayButton(name) {
	let holidayButton = document.createElement("button");
	holidayButton.id = "btn-holiday";
	holidayButton.innerText = name;
	document.querySelector(".buttons-container").append(holidayButton);
}

createHolidayButton("Feriados");

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

function createFridayButton(name) {
	let fridayButton = document.createElement("button");
	fridayButton.id = "btn-friday";
	fridayButton.innerText = name;
	document.querySelector(".buttons-container").append(fridayButton);
}

createFridayButton("Sexta-feira");

//

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
	let nova_task = document.createElement("h4");
	nova_task.innerText = input;
	nova_task.className = "to-do-task";
	document.querySelector(".my-tasks").append(nova_task);
}

document.querySelector(".my-tasks").addEventListener("click", taskInput);

let save_color = [];
let index_element = 0;

function taskInput(event) {
	let todo_list = event.target.className;
	if (todo_list.includes("to-do-task")) {
		let color = prompt("Color for Task");
		event.target.style.backgroundColor = color;
		save_color.push(`{index: ${index_element}}, color: ${color}`);
		index_element += 1;
	}
}

// function divColorida(event) {
// 	let todo_list = event.target.className;
// 	console.log(todo_list);
// 	if (todo_list.includes("to-do-task")) {
// 		let color = prompt("Color for Task");
// 		let nova_legenda = document.createElement("div");
// 		nova_legenda.style.backgroundColor = color;
// 		nova_legenda.className = "task";
// 		document.querySelector(".my-tasks").append(nova_legenda);
// 	}
// }

document.querySelector("#days").addEventListener("click", addTaskToDay);

function addTaskToDay(event) {
	console.log(save_color);
}
