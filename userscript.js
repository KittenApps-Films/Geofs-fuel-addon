// ==UserScript==
// @name         GeoFS fuel add-on
// @namespace    https://github.com/KittenApps-Films/Geofs-fuel-addon
// @version      1.0
// @description  Adds fuel to GeoFS
// @author       Noah S. Davidson, GeoFS call sign KittenFilms[KFA]
// @match        http://geo-fs.com/geofs.php?v=*
// @match        http://www.geo-fs.com/geofs.php?v=*
// @match        https://geo-fs.com/geofs.php?v=*
// @match        https://www.geo-fs.com/geofs.php?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';
    console.log("Geofs fuel installer running");

    var FuelScript = document.createElement('script');
    FuelScript.src="https://kittenapps-films.github.io/geofs/geofs-addons/addon-scripts/fuel.js";
    FuelScript.type = 'text/javascript';
    FuelScript.id = "Fuel add-on";
    document.body.appendChild(FuelScript);
    console.log("Fuel installed");
})
//it works
