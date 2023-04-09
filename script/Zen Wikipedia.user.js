// ==UserScript==
// @name         Zen Wikipedia
// @namespace    https://pgattic.github.io
// @version      1
// @description  Ctrl+Shift+F to toggle the top and side bars of Wikipedia! Only supports the standard UI.
// @author       pgattic
// @match        https://en.wikipedia.org/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle(`:root { color-scheme: dark; }`)

    var full = false;
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() == "f" && e.ctrlKey && e.shiftKey) {
            full = !full;
            document.getElementById("mw-head").style.display = document.getElementById("mw-page-base").style.display = document.getElementById("mw-panel").style.display = (full ? "none" : "block");
            document.getElementById("content").style = "margin-left:" + (full ? "0px" : "176px");
        }
    })
})();
