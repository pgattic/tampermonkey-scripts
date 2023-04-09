// ==UserScript==
// @name        Accent typer
// @namespace   https://pgattic.github.io
// @version     1.0
// @description Use the backtick key to type accents and special characters with ease!
// @author      pgattic
// @match       *://*/*
// @icon        data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant       none
// ==/UserScript==

(function() {
  let replacements = {
    "a`": "á",
    "A`": "Á",
    "e`": "é",
    "E`": "É",
    "i`": "í",
    "I`": "Í",
    "o`": "ó",
    "O`": "Ó",
    "u`": "ú",
    "U`": "Ú",
    "n`": "ñ",
    "N`": "Ñ",
    "!`": "¡",
    "?`": "¿",
  }
  document.addEventListener("keyup", (e) => {
    for (let i in replacements) {
      e.target.value = e.target.value.replaceAll(i, replacements[i]);
    }
  })
})();
