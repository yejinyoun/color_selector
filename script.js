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

  currentColor();
  displayColor();
  displayColorCode();
}

function currentColor(picked) {
  picked = picker.value;

  setHEX(picked);
  HEXtoRGB(hex);

  function setHEX(pickedColor) {
    hex = pickedColor;
    console.log(`hex code is _${hex}_`);
  }
  function HEXtoRGB(pickedColor) {}
  function RGBtoHEX() {}
}

function displayColor() {}

function displayColorCode() {}
