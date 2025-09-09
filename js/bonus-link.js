function generateBonusLink() {
	const link = document.getElementById("bonus-link");
	if (!link) return;

	const match = window.location.search.match(
		/p(\d+)p(\d+)p([\w\d]{4})(?:t(\d+))?(?:f(\d+))?(?:l(\d+))?([\w\d]+)?(\&subid=([\w\d]+))?/
	);

	let newSearch = window.location.search;
	if (match && match[0] && !window.location.search.includes("partner=")) {
		newSearch = window.location.search.replace(match[0], "partner=" + match[0]);
	}

	const baseUrl = window.__REDIRECT_LINK || "https://vb.staaqwe.com/pt";
	link.setAttribute("href", baseUrl + newSearch + "#registration");
	return link.getAttribute("href");
}
