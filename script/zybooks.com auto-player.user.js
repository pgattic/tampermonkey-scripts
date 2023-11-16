// ==UserScript==
// @name        zybooks.com auto-player
// @namespace   https://pgattic.github.io
// @version     1.0
// @description I was sick of having to click through all those play buttons. So here.
// @author      pgattic
// @match       https://learn.zybooks.com/zybook/*/chapter/*/section/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       none
// ==/UserScript==

(function() {
	'use strict';
    let goneAlready = false;

    let startButton = document.createElement("button");
    startButton.textContent = "Start All Animations";
    startButton.style = "position: fixed; top:60px; left:0;";
    document.body.appendChild(startButton);

    startButton.addEventListener("click", () => {
        startButton.setAttribute("disabled", "true");
        startButton.textContent = "Running...";
        goneAlready = false;
        let clickInterval = window.setInterval(()=> {

            // Set all 2x speed checkboxes
            if (!goneAlready) {
                for (let i of document.querySelectorAll("[aria-label='2x speed']")) {
                    i.click();
                }
                goneAlready = true;
            }

            // Grab all the target buttons
            let startButtons = document.getElementsByClassName("start-button");
            let playButtons = document.querySelectorAll("[aria-label='Play']");
            let pauseButtons = document.querySelectorAll(".pause-button");

            // Breaking condition
            if (startButtons.length == 0 && playButtons.length == 0 && pauseButtons.length == 0) {
                startButton.removeAttribute("disabled");
                startButton.textContent = "Done!";
                goneAlready = false;
                window.clearInterval(clickInterval);
            }

            // Clicky clicky all the buttons :)
            for (let i of startButtons) {
                i.click();
            }
            for (let i of playButtons) {
                i.click();
            }
        }, 10);
    });
})();
