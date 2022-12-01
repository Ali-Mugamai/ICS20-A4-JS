// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-03-Js-/sw.js", {
    scope: "/ICS20-5-03-Js-/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  children = document.getElementById("kids").checked
  teenagers = document.getElementById("teens").checked
  adult = document.getElementById("adults").checked

  if (children == true) {
    document.getElementById("answer").innerHTML =
      "<p>you can only watch a G rated film.</p>"
  } else if (teenagers == true) {
    document.getElementById("answer").innerHTML =
      "<p>you can watch a PG-13 rated film and below.</p>"
  } else if (adult == true) {
    document.getElementById("answer").innerHTML =
      "<p>you can watch an R rated film!</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>not working</p>"
  }
}
