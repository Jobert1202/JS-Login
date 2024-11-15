"use strict";

function Control_a() {
  var password = document.getElementById("password");
  var password_control = document.getElementById("control_password");
  var output = document.getElementById("output");
  var code = document.getElementById("code"); //console.log(password);
  //console.log("Password = ", password.value, "Password_control = ", password_control.value);

  if (password.value == password_control.value) {
    if (!isNaN(code.value)) {
      console.log("Login is true");
      output.innerHTML = "Login is true";
    } else {
      output.innerHTML = "Login is false";
    }
  } else {
    console.log("Login is false");
    output.innerHTML = "Login is false";
  }
}

function Control() {
  var password = document.getElementById("password");
  var password_control = document.getElementById("control_password");
  var output = document.getElementById("output");
  var code = document.getElementById("code");

  if (password.value == password_control.value) {
    if (!isNaN(code.value)) {
      console.log("Login is true");
      output.innerHTML = "Login is true";
    } else {
      output.innerHTML = "Login is false";
    }
  } else {
    console.log("Login is false");
    output.innerHTML = "Login is false";
  }
}