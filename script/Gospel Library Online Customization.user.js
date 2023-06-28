// ==UserScript==
// @name         Gospel Library Online Customization
// @namespace    https://pgattic.github.io
// @version      1.0
// @description  Makes some small changes to the styling of the Study section
// @author       pgattic
// @match        https://*.churchofjesuschrist.org/study/*
// @icon
// @grant        GM_addStyle
// ==/UserScript==

(function() {

	GM_addStyle(`

#content {
	min-width: 600px;
	max-width: 60%;
}

:root {
	color-scheme: dark;
}

	`);



	function selectElementText(el) {
		var doc = window.document, sel, range;
		if (window.getSelection && doc.createRange) {
			sel = window.getSelection();
			range = doc.createRange();
			range.selectNodeContents(el);
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (doc.body.createTextRange) {
			range = doc.body.createTextRange();
			range.moveToElementText(el);
			range.select();
		}
	}

	document.addEventListener("contextmenu", (e)=>{ // Allow right-clicking to select verses and paragraphs
		if (e.composedPath().some((asc)=>{return asc.classList.contains("body")})) { // if the right-click target has a parent element in the class of "body"
			e.preventDefault();
			selectElementText(e.composedPath()[0]);
		}
	})

})();
