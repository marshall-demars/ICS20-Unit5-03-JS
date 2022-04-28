// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-03-JS/sw.js", {
    scope: "/ICS20-Unit5-03-JS/",
  })
}

/**
 * This function calculates the cost of a pizza
 */
function myButtonClicked() {
  // input
  const adults = document.getElementById("adult-age").checked
  const teenagers = document.getElementById("teen-age").checked
  const kids = document.getElementById("kid-age").checked
  const babies = document.getElementById("baby-age").checked
  
  // process and output
  if (adults == true) {
    document.getElementById("watch").innerHTML = "You can watch a R rated movie alone!"
  } else if (teenagers == true) {
    document.getElementById("watch").innerHTML = "You can watch a PG-13 rated movie alone!"
  } else if (kids == true) {
    document.getElementById("watch").innerHTML = "You can watch a G or PG rated movie!"
  } else if (babies == true) {
    document.getElementById("watch").innerHTML = "You can't watch too many movies!"
  } else {
    // pass
  }
}