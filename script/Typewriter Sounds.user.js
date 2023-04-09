// ==UserScript==
// @name         Typewriter Sounds
// @namespace    https://pgattic.github.io
// @version      1
// @description  Type anywhere in the web page and get some typewriter-sounding effects! Press Enter for a ding!
// @author       pgattic
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("keypress", (e) => {
        new Audio('https://pgattic.github.io/html5-golf/challenge/' + (e.keyCode == 13) + '.mp3').play();
    })
})();
