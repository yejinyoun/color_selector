"use strict";

window.addEventListener("DOMContentLoaded", init);
//init function executes when DOMContentLoaded

function init() {
  document.querySelector("input").addEventListener("input", showColor);
}

function showColor() {
  let colorcode = getColorCode();
  console.log(colorcode);
  showColorBox(colorcode);

  function showColorBox(csscode) {
    // change backgroundcolor to selected color
    document.querySelector("#color").style.backgroundColor = csscode.css;
  }
  function showColorCode(colorcode) {
    function showHEX(hexcode) {}
    function showRGB(rgbcode) {}
    function showHSL(hslcode) {}
  }
  function getColorCode() {
    // returns colorcode(object) including each property (hex,rgb,hsl,css)
    let hex = getHEX();
    let rgb = hexToRGB(hex);
    let hsl = rgbToHSL(rgb.r, rgb.b, rgb.b);
    let css = rgbToCSS(rgb);

    return { hex: hex, rgb: rgb, hsl: hsl, css: css };

    function getHEX() {
      let hexcode = document.querySelector("input").value;
      return hexcode;
    }
    function hexToRGB(hexcode) {
      let hexNum = hexcode.substring(1); // to remove # on the front

      let r = parseInt(hexNum.substring(0, 2), 16); //convert first 2digit into 16 radix number
      let g = parseInt(hexNum.substring(2, 4), 16); //convert 3-4digit into 16 radix number
      let b = parseInt(hexNum.substring(4, 6), 16); //convert last 2digit into 16 radix number

      return { r: r, g: g, b: b };
    }
    function rgbToHSL(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;

      let h, s, l;

      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);

      if (max === min) {
        h = 0;
      } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
      } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
      } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
      }

      if (h < 0) {
        h = h + 360;
      }

      l = (min + max) / 2;

      if (max === 0 || min === 1) {
        s = 0;
      } else {
        s = (max - l) / Math.min(l, 1 - l);
      }
      // multiply s and l by 100 to get the value in percent, rather than [0,1]
      s *= 100;
      l *= 100;

      h = Math.floor(h);
      s = Math.floor(s);
      l = Math.floor(l);

      return { h: h, s: s, l: l };
    }
    function rgbToCSS(rgbcode) {
      let csscode = `rgb(${rgbcode.r}, ${rgbcode.g}, ${rgbcode.b})`;
      return csscode;
    }
  }
}
