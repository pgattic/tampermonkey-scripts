// ==UserScript==
// @name         Gmail Ad Deleter
// @namespace    https://pgattic.github.io
// @version      1
// @description  Why does Gmail put ads in "Promotions" and "Social" inboxes? Let's fix that real quick.
// @author       pgattic
// @match        https://mail.google.com/mail/u/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  window.setInterval(() => {
    if (document.getElementsByClassName("ast").length > 0) {
      document.getElementsByClassName("ast")[0].parentElement.parentElement.parentElement.parentElement.children[9].firstElementChild.firstElementChild.click();
    }
  }, 10);
})();
