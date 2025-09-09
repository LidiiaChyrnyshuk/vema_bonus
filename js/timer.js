document.addEventListener("DOMContentLoaded", () => {
	function addZero(num, digits = 2) {
		return num.toString().padStart(digits, "0");
	}

	const daysEl = document.getElementById("days");
	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");
	const secondsEl = document.getElementById("seconds");
	const bonusLinkEl = document.getElementById("bonus-link");

	const endTime = Date.now() + 3 * 60 * 1000; // таймер 3 хвилини

	// Формуємо динамічне посилання для кнопки
	function updateBonusLink() {
		if (!bonusLinkEl) return;
		const baseUrl = "https://vb.staaqwe.com/pt";
		const match = window.location.search.match(
			/p(\d+)p(\d+)p([\w\d]{4})(?:t(\d+))?(?:f(\d+))?(?:l(\d+))?([\w\d]+)?(\&subid=([\w\d]+))?/
		);

		let newSearch = window.location.search;
		if (match && match[0] && !window.location.search.includes("partner=")) {
			newSearch = window.location.search.replace(
				match[0],
				"partner=" + match[0]
			);
		}

		bonusLinkEl.setAttribute("href", baseUrl + newSearch + "#registration");
	}

	// Початкове оновлення кнопки
	updateBonusLink();

	const interval = setInterval(() => {
		const now = Date.now();
		const timeLeft = endTime - now;

		if (timeLeft <= 0) {
			clearInterval(interval);
			// Після закінчення таймера редірект на поточний href кнопки
			if (bonusLinkEl && bonusLinkEl.href) {
				window.location.href = bonusLinkEl.href;
			}
			return;
		}

		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
		const seconds = Math.floor((timeLeft / 1000) % 60);

		if (daysEl) daysEl.textContent = addZero(days);
		if (hoursEl) hoursEl.textContent = addZero(hours);
		if (minutesEl) minutesEl.textContent = addZero(minutes);
		if (secondsEl) secondsEl.textContent = addZero(seconds);
	}, 1000);
});
