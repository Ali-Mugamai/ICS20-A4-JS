// Created by: Ali Mugamai
// Created on: dec 2022
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
  const burgers = parseInt(document.getElementById("num_of_burgers").value)
  bill = 0

  if (meat == true) {
    bill = burgers * 5
  } else if (veggie == true) {
    bill = burgers * 3
  } else {
    document.getElementById("answer").innerHTML = "<p>not working</p>"
  }
  document.getElementById("answer").innerHTML =
    "<p>your bill is" + bill + "</p>"
}
