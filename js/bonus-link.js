import { createDomainLinkSafe } from "./global-params-utils.js";

document.addEventListener("DOMContentLoaded", () => {
	const bonusLink = document.getElementById("bonus-link");
	if (!bonusLink) return;

	const url = createDomainLinkSafe("/");
	if (url) {
		bonusLink.href = url;
	}
});
