let countDownDate = new Date('Oct 31, 2023 09:00:00').getTime()
let $countdownDays = document.getElementById('days')
let $countdownHours = document.getElementById('hours')
let $countdownMinutes = document.getElementById('minutes')
let $countdownSeconds = document.getElementById('seconds')

// Update the count down every 1 second
let x = setInterval(function () {
	// Get the current date and time
	let now = new Date().getTime()

	// Find the distance between now and the count down date
	let distance = countDownDate - now

	// Calculate the days, hours, minutes and seconds remaining
	let days = Math.floor(distance / (1000 * 60 * 60 * 24))
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)

	$countdownDays.innerHTML = `<h2>${days < 10 ? `0${days}` : days}</h2>`
	$countdownHours.innerHTML = `<h2>${hours < 10 ? `0${hours}` : hours}</h2>`
	$countdownMinutes.innerHTML = `<h2>${
		minutes < 10 ? `0${minutes}` : minutes
	}</h2>`
	$countdownSeconds.innerHTML = `<h2>${
		seconds < 10 ? `0${seconds}` : seconds
	}</h2>`

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x)
	}
}, 1000)
