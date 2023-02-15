"use strict";

window.addEventListener("DOMContentLoaded", init);
//init function executes when DOMContentLoaded

let picker;
let hex;
let rgb;
let hsl;

function init() {
  //detects when the color is selected and executes all the function
  picker = document.querySelector("input");

  picker.addEventListener("input", currentColor);
  picker.addEventListener("input", displayColor);
  picker.addEventListener("input", displayColorCode);
}

function currentColor(picked) {
  // set value to hex, rgb, hsl

  picked = picker.value;

  let r;
  let g;
  let b;

  setHEX(picked);
  HEXtoRGB(hex);
  RGBtoHSL(r, g, b);

  function setHEX(pickedColor) {
    hex = pickedColor;
    console.log(`hex code is_${hex}_`);
  }
  function HEXtoRGB(pickedHex) {
    let pickedHexNum = pickedHex.substring(1); // to remove # on the front

    r = parseInt(pickedHexNum.substring(0, 2), 16); //convert first 2digit into 16 radix number
    g = parseInt(pickedHexNum.substring(2, 4), 16); //convert 3-4digit into 16 radix number
    b = parseInt(pickedHexNum.substring(4, 6), 16); //convert last 2digit into 16 radix number

    rgb = `${r}, ${g}, ${b}`;

    console.log(`r is_${r}_`);
    console.log(`g is_${g}_`);
    console.log(`b is_${b}_`);
    console.log(rgb);
  }
  function RGBtoHSL(r, g, b) {
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

    hsl = `${h}, ${s}%, ${l}%`;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    console.log(hsl);
  }
}

function displayColor() {
  // change backgroundcolor to selected coler
  document.querySelector("#color").style.backgroundColor = `${hex}`;
}

function displayColorCode() {
  // show the color code - hex, rgb, hsl
  document.querySelector("#hexcode").textContent = hex;
  document.querySelector("#rgbcode").textContent = rgb;
  document.querySelector("#hslcode").textContent = hsl;
}
