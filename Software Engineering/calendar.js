const calendar = document.querySelector(".calendar"),
	date = document.querySelector(".date"),
	daysContainer = document.querySelector(".days"),
	prev = document.querySelector(".prev"),
	next = document.querySelector(".next"),
	todayBtn = document.querySelector(".today-btn"),
	gotoBtn = document.querySelector(".goto-btn"),
	dateInput = document.querySelector(".date-input"),
	eventDay = document.querySelector(".event-day"),
	eventDate = document.querySelector(".event-date"),
	eventsContainer = document.querySelector(".events");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const daysIndonesia = [
	"Minggu",
	"Senin",
	"Selasa",
	"Rabu",
	"Kamis",
	"Jumat",
	"Sabtu"
];

const months = [
	"Januari",
	"Februari",
	"Maret",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Agustus",
	"September",
	"Oktober",
	"November",
	"Desember"
];

let eventsArr = [];

function initCalendar() {
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const prevLastDay = new Date(year, month, 0);
	const prevDays = prevLastDay.getDate();
	const lastDate = lastDay.getDate();
	const day = firstDay.getDay();
	const nextDays = 7 - lastDay.getDay() - 1;

	date.innerHTML = months[month] + " " + year;

	let days = "";

	for (let x = day; x > 0; x--) {
		days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDate; i++) {
		let event = false;
		eventsArr.forEach((eventObj) => {
			if (
				eventObj.day === i &&
				eventObj.month === month + 1 &&
				eventObj.year === year
			) {
				event = true;
			}
		});
		if (
			i === new Date().getDate() &&
			year === new Date().getFullYear() &&
			month === new Date().getMonth()
		) {
			activeDay = i;
			getActiveDay(i);
			updateEvents(i);
			if (event) {
				days += `<div class="day today active event">${i}</div>`;
			} else {
				days += `<div class="day today active">${i}</div>`;
			}
		} else {
			if (event) {
				days += `<div class="day event">${i}</div>`;
			} else {
				days += `<div class="day ">${i}</div>`;
			}
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="day next-date">${j}</div>`;
	}
	daysContainer.innerHTML = days;
	addListener();
}

function prevMonth() {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	initCalendar();
}

function nextMonth() {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

function addListener() {
	const days = document.querySelectorAll(".day");
	days.forEach((day) => {
		day.addEventListener("click", (e) => {
			getActiveDay(e.target.innerHTML);
			updateEvents(Number(e.target.innerHTML));
			activeDay = Number(e.target.innerHTML);
			days.forEach((day) => {
				day.classList.remove("active");
			});
			if (e.target.classList.contains("prev-date")) {
				prevMonth();
				setTimeout(() => {
					const days = document.querySelectorAll(".day");
					days.forEach((day) => {
						if (
							!day.classList.contains("prev-date") &&
							day.innerHTML === e.target.innerHTML
						) {
							day.classList.add("active");
						}
					});
				}, 100);
			} else if (e.target.classList.contains("next-date")) {
				nextMonth();
				setTimeout(() => {
					const days = document.querySelectorAll(".day");
					days.forEach((day) => {
						if (
							!day.classList.contains("next-date") &&
							day.innerHTML === e.target.innerHTML
						) {
							day.classList.add("active");
						}
					});
				}, 100);
			} else {
				e.target.classList.add("active");
			}
		});
	});
}

todayBtn.addEventListener("click", () => {
	today = new Date();
	month = today.getMonth();
	year = today.getFullYear();
	initCalendar();
});

dateInput.addEventListener("input", (e) => {
	dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
	if (dateInput.value.length === 2) {
		dateInput.value += "/";
	}
	if (dateInput.value.length > 7) {
		dateInput.value = dateInput.value.slice(0, 7);
	}
	if (e.inputType === "deleteContentBackward") {
		if (dateInput.value.length === 3) {
			dateInput.value = dateInput.value.slice(0, 2);
		}
	}
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
	const dateArr = dateInput.value.split("/");
	if (dateArr.length === 2) {
		if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
			month = dateArr[0] - 1;
			year = dateArr[1];
			initCalendar();
			return;
		}
	}
	alert("Invalid Date");
}

function getActiveDay(date) {
	const day = new Date(year, month, date);
	const dayIndex = day.getDay();
	const dayName = daysIndonesia[dayIndex];
	eventDay.innerHTML = dayName;
	eventDate.innerHTML = date + " " + months[month] + " " + year;
}

function updateEvents(date) {
	let events = "";
	eventsArr.forEach((event) => {
		if (
			date === event.day &&
			month + 1 === event.month &&
			year === event.year
		) {
			event.events.forEach((event) => {
				events += `<div class="event">
			<div class="title">
			  <i class="fa fa-circle"></i>
			  <h3 class="event-title">${event.title}</h3>
			</div>
			<div class="event-time">
			  <span class="event-time">${event.time}</span>
			</div>
		</div>`;
			});
		}
	});
	if (events === "") {
		events = `<div class="no-event">
			<h3>No Events</h3>
		</div>`;
	}
	eventsContainer.innerHTML = events;
}

function fetchEvents() {
	fetch('events.php')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			eventsArr = data;
			initCalendar();
		})
		.catch(error => {
			console.error('Error fetching events:', error);
		});
}

fetchEvents();