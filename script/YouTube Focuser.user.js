// ==UserScript==
// @name        YouTube Focuser
// @namespace   https://pgattic.github.io
// @version     1.0
// @description 4/19/2023, 9:33:51 PM
// @author      pgattic
// @match       https://www.youtube.com/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       GM_addStyle
// ==/UserScript==

(function() {
	'use strict';

    let hideComments = true;
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() == "c" && e.altKey) { // hide/unhide comments if needed
            hideComments = !hideComments;
            document.querySelector("#comments").style.display = (hideComments? "none": "inherit");
        }
    });


    GM_addStyle(`

    #related, #logo-icon, .ytp-endscreen-content {
        display: none !important;
    }

    #comments {
        display: none;
    }

/* .video-stream, .html5-video-container {
    width: 100% !important;
    height: 100% !important;
}
 */
#guide {width: 100%;}
    `);
})();
