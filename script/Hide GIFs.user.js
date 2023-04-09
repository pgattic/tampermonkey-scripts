// ==UserScript==
// @name        Hide GIFs
// @namespace   Press "h" to hide all GIFs on a webpage
// @match       https://*/*
// @grant       none
// @version     1.0
// @author      pgattic
// @description 10/18/2022, 8:28:50 PM
// ==/UserScript==

document.addEventListener("keydown", (e) => {
  if (e.key == "h") {
    for (var i of document.getElementsByTagName("img")) {
      if (i.src.includes(".gif")) {
        i.style = "display: none";
      }
    }
  }
})
