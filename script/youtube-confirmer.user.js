// ==UserScript==
// @name         YouTube Double-Checker
// @namespace    https://pgattic.github.io
// @version      1
// @description  Makes you confirm every video you want to watch on YouTube, so that you don't get carried away too long!
// @author       pgattic
// @match        https://*.youtube.com/watch?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
    if(!confirm("Are you really sure you want to be watching this?")){window.close()}
})()
