"use strict";

window.addEventListener("DOMContentLoaded", init);
//init function executes when DOMContentLoaded

let picker;
let pickedColor;

function init() {
  //detects when the color is selected and executes all the function
  picker = document.querySelector("input");

  picker.addEventListener("input", currentColor);

  currentColor();
  displayColor();
  displayColorCode();
}

function currentColor() {
  pickedColor = picker.value;
  console.log(pickedColor);
  function readHEX() {}
  function HEXtoRGB() {}
  function RGBtoHEX() {}
}

function displayColor() {}

function displayColorCode() {}
