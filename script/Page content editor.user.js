// ==UserScript==
// @name         Page content editor
// @namespace    https://pgattic.github.io/
// @version      1
// @description  Ever use "Inspect Element" to edit the text of a web page? Well, this makes it even easier! Press Ctrl + Shift + E to enable/disable content editing directly on the page!
// @author       pgattic
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	var editing = false;
	document.addEventListener("keydown", (e) => {
		if (e.key.toLowerCase() == "e" && e.ctrlKey && e.shiftKey) {
			editing = !editing;
			document.body.contentEditable = editing ? "true" : "inherit";
			alert("Content edit mode o" + (editing ? "n" : "ff"));
		}
	})
})();
