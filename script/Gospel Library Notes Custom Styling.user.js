// ==UserScript==
// @name         Gospel Library Notes Custom Styling
// @namespace    https://pgattic.github.io/
// @version      1
// @description  Gospel Library online's notes page looks atrocious. Time to make some changes.
// @author       pgattic
// @match        https://www.churchofjesuschrist.org/notes
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle(`

#app main {
  max-width: 100%;
/*   max-height: 100%;
  min-height: 100%;
  height: 100% !important; */
}

/* #app main > div {
  max-height: 100%;
  min-height: 100%;
  height: 100% !important;
}
 */


#app main > div > div {
  overflow: hidden;
  height: 100% !important;
}


platform-footer {
  display: none;
}

#app {
  max-height: 100%;
}

/* #app > div {
  height: 100%;
  max-height: 100%;
  min-height: 100%;
}
 */
#app > div > div {
  height: 100%;
  max-height: 100%;
  min-height: 100%;
}


body {
  display: grid;
  height: 100% !important;
  grid-template-rows: 120px 0 1fr;
  overflow: hidden;
}

`)

})();
