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
    console.log("You can watch an R rated movie alone!")
  } else if (teenagers == true) {
    console.log("You can watch a PG 13 movie alone!")
  } else if (kids == true) {
    console.log("You can watch a PG or G movie!")
  } else (babies == true) {
    console.log("You are too young to watch most movies!")
  }