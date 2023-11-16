// ==UserScript==
// @name        Scripture Progress Meter
// @namespace   https://pgattic.github.io
// @version     1.0
// @description Displays your overall progress in your canon of scripture.
// @author      pgattic
// @match       https://www.churchofjesuschrist.org/study/scriptures/*/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       none
// ==/UserScript==

(function() {
	'use strict';

	function sum(list) { return list.reduce((a, b) => a + b, 0); } // sum up the numbers in a list
	function sumVals(obj) { return Object.values(obj).reduce((a, b) => a + b, 0); } // sum the values from an object

	const target = document.getElementsByClassName('contentTitle-JbPZw')[0].children[0];
	// const chaptersInCanons = {
	// 	"ot": 929,
	// 	"nt": 260,
	// 	"bofm": 239,
	// 	"dc-testament": 140, // 138 sections, 2 Official Declarations
	// 	"pgp": 16 // 8 Moses, 5 Abraham, JS-M, HS-H, AoF
	// };
	// const chaptersInTotal = sumVals(chaptersInCanons);
	const chaptersInBooks = { // All keys are written as used by the Church Gospel Library URLs
		"ot": {"gen":50, "ex":40, "lev":27, "num":36, "deut":34, "josh":24, "judg":21, "ruth":4, "1-sam":31, "2-sam":24, "1-kgs":22, "2-kgs":25, "1-chr":29, "2-chr":36, "ezra":10, "neh":13, "esth":10, "job":42, "ps":150, "prov":31, "eccl":12, "song":8, "isa":66, "jer":52, "lam":5, "ezek":48, "dan":12, "hosea":14, "joel":3, "amos":9, "obad":1, "jonah":4, "micah":7, "nahum":3, "hab":3, "zeph":3, "hag":2, "zech":14, "mal":4},
		"nt": {"matt":28, "mark":16, "luke":24, "john":21, "acts":28, "rom":16, "1-cor":16, "2-cor":13, "gal":6, "eph":6, "philip":4, "col":4, "1-thes":5, "2-thes":3, "1-tim":6, "2-tim":4, "titus":3, "philem":1, "heb":13, "james":5, "1-pet":5, "2-pet":3, "1-jn":5, "2-jn":1, "3-jn":1, "jude":1, "rev":22},
		"bofm": {"1-ne":22, "2-ne":33, "jacob":7, "enos":1, "jarom":1, "omni":1, "w-of-m":1, "mosiah":29, "alma":63, "hel":16, "3-ne":30, "4-ne":1, "morm":9, "ether":15, "moro":10},
		"dc-testament": {"dc":138, "od":2},
		"pgp": {"moses":8, "abr":5, "js-m":1, "js-h":1, "a-of-f":1},
	};



	function calculateProgress(url) {
		const dir = url.slice(2);
		if (!Object.keys(chaptersInBooks).includes(dir[0])) {
			return NaN; // If canon not found in the list
		}

		const canonDict = chaptersInBooks[dir[0]];

		if (!Object.keys(canonDict).includes(dir[1])) {
			return NaN; // If book not found in the list
		}

//		const totalCanonChapters = sumVals(canonDict);

		let canonChapterProgress = 0;
		let bookChapterProgress = Number(dir[2] - 1); // chapter in the book (as index)
		const bookIdx = Object.keys(canonDict).indexOf(dir[1]); // index of book within canon of scripture

		canonChapterProgress += sum(Object.values(canonDict).slice(0, bookIdx)); // calculate previous chapters from beginning of canon
		canonChapterProgress += bookChapterProgress;

		const data = {
			"canonProgress": canonChapterProgress,
			"canonTotal": sumVals(canonDict),
		}
		return data;
	}

	function displayProgress(element) {
		const urlStrip = window.location.href.split("churchofjesuschrist.org/")[1].split("?")[0].split("/"); // gets everything between the base url and the "?" and separates it by "/"
		if (urlStrip.length > 4 && urlStrip[0] == "study" && urlStrip[1] == "scriptures") {
			const progress = calculateProgress(urlStrip);
			if (!document.getElementById("progressInjection")) { // might need to re-insert the stats element
				element = setup();
			}
			element.innerText = `Progress: Chapter ${progress["canonProgress"] + 1} / ${progress["canonTotal"]} (${(progress["canonProgress"]/progress["canonTotal"] * 100).toFixed(2)}%)`;
		}
	}

	function setup() {
		target.innerHTML += "<br>";
		target.innerHTML += "<span id='progressInjection'></span>";
		target.style = "line-height: 14px;";
		const displayElement = document.getElementById("progressInjection");
		displayElement.style = "color:#888; font-size: 12px;";
		return displayElement;
	}

	const observed = target;
	const observer = new MutationObserver(callDisplayProgress);

	const displayElement = setup();
	displayProgress(displayElement);

	function callDisplayProgress(mutationList, observer) {
		displayProgress(displayElement);
	}
	observer.observe(observed, {subtree: true, characterData: true, childList: true});

})();
