// ==UserScript==
// @name        BYUI Books dark mode
// @namespace   https://pgattic.github.io
// @version     1.0
// @description Gives a nice, easy-on-the-eyes dark mode for BYU books, for night-time reading.
// @author      pgattic
// @match       https://books.byui.edu/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';
	GM_addStyle(`

:root {
    color-scheme: dark;
    --bs-body-bg: #111;
    --bs-body-color: #eee;
}

.btn.opacity-25.hover-opacity-100 {
    filter: invert(100%) sepia(0%) saturate(301%) hue-rotate(288deg) brightness(102%) contrast(105%);
}

.tooltip-inner {
    color: #eee;
}

`)
})();
