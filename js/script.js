
// Created by: Graydon Ezzeddin
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

  // This function calculates all numbers between min and max. 
  function displayNumbers() { 

  // Declare product
let product = 1 

  // Declare numbers
let numbers = ""

  // Declare two numbers
let base = parseInt(document.getElementById('base').value )
let exponent = parseInt(document.getElementById('exponent').value )

  if ((isNaN(base)) || (isNaN(exponent))) {
  numbers= "Please enter two positive intergers as a base and an exponent"
}
    else {
  // Use a for loop to calculate answer of the product of the two intergers 
    for (let counter = 1; counter <= exponent; counter++) { 
      product*=base
    }
    numbers = exponent + '^' + base + "=" + product ;
    }
  // DISPLAY PRODUCT
    document.getElementById("display-numbers").innerHTML = numbers
  
  }
    
    