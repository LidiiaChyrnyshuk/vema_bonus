import { createDomainLinkSafe } from "./global-params-utils.js";

document.addEventListener("DOMContentLoaded", () => {
	function addZero(num, digits = 2) {
		return num.toString().padStart(digits, "0");
	}

	const daysEl = document.getElementById("days");
	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");
	const secondsEl = document.getElementById("seconds");

	const endTime = Date.now() + 3 * 60 * 1000; 

	function redirectToProduct() {
		const url = createDomainLinkSafe("/"); // автоматично підставить globalParams
		if (url) window.location.href = url;
		else console.error("Не вдалося сформувати посилання для редіректу");
	}

	const interval = setInterval(() => {
		const now = Date.now();
		const timeLeft = endTime - now;

		if (timeLeft <= 0) {
			clearInterval(interval);
			redirectToProduct();
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
