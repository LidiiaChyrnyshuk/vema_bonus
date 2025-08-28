import { createDomainLinkSafe } from "./global-params-utils.js";

document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll("a[data-redirect]");
	links.forEach((link) => {
		const url = createDomainLinkSafe("/");
		if (url) link.href = url;
		else console.error("Не вдалося сформувати посилання для редіректу");
	});
});
