// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-A4-JS/sw.js", {
    scope: "/ICS20-A4-JS/",

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
  veggie = document.getElementById("veggie").checked
  meat = document.getElementById("meat").checked
  no = document.getElementById("no_drink").checked
  coke = document.getElementById("coke").checked
  bill = 0

  if (meat == true) {
    bill = 6
      if (coke == true) {
        bill = 8
      }
  } else if (veggie == true) {
    bill = 4
      if (coke == true) {
        bill = 6
      } else {
        bill = 4
      }
  } else {
    document.getElementById("answer").innerHTML = "<p>not working</p>"
  }
  document.getElementById("answer").innerHTML = "<p>your bill is" + bill + "</p>"
}
