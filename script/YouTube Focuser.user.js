// ==UserScript==
// @name        YouTube Focuser
// @namespace   https://pgattic.github.io
// @version     1.0
// @description Helps you not be distracted on YouTube by hiding suggested videos and other distracting content
// @author      pgattic
// @match       https://www.youtube.com/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';
	GM_addStyle(`

    #related, #logo-icon, #comments, .ytp-endscreen-content {
        display: none !important;
    }

/* .video-stream, .html5-video-container {
    width: 100% !important;
    height: 100% !important;
}
 */
#guide {width: 100%;}
    `);
})();
