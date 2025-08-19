document.addEventListener("DOMContentLoaded", () => {
	function addZero(num, digits = 2) {
		return num.toString().padStart(digits, "0");
	}

	const daysEl = document.getElementById("days");
	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");
	const secondsEl = document.getElementById("seconds");

	// Встановлюємо час завершення: зараз + 10 хв
	const endTime = Date.now() + 1 * 60 * 1000;

	const interval = setInterval(() => {
		const now = Date.now();
		const timeLeft = endTime - now;

		if (timeLeft <= 0) {
			clearInterval(interval);
/* 			daysEl.textContent = "00";
			hoursEl.textContent = "00";
			minutesEl.textContent = "00";
			secondsEl.textContent = "00";
			hundredthsEl.textContent = "00"; */
			window.location.href = "https://www.vemabet.com/en/";
			return;
		}

		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
		const seconds = Math.floor((timeLeft / 1000) % 60);

		daysEl.textContent = addZero(days);
		hoursEl.textContent = addZero(hours);
		minutesEl.textContent = addZero(minutes);
		secondsEl.textContent = addZero(seconds);
	}, 33);
});
