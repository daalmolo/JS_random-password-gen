"use strict";

// symbols used for the password

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const symbols = "`~!@#$%^&*()_+-=|[]{};:/.,?><";
const numbers = "1234567890";

const allChar = alphabet + alphabet.toUpperCase() + symbols + numbers;

const passwrdField = document.getElementsByClassName("password")[0];
const genButton = document.getElementsByClassName("app__gen-btn")[0];

const passLength = 20;

function generatePassword() {
  let password = "";

  while (passLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passwrdField.value = password;
}

function onReload() {
  passwrdField.value = "";
}

document.addEventListener("DOMContentLoaded", onReload);
