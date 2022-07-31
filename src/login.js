"use strict";

const USERNAME_KEY = "username";
const CLASSNAME_HIDDEN = "hidden";

const $loginForm = document.querySelector("#login-form");
const $nameInput = $loginForm.querySelector(".name-input");
const $greeting = document.querySelector(".greeting");
const $todos = document.querySelector(".todos");

setGreeting();

function onSubmitLogin(event) {
  event.preventDefault();
  const inputData = $nameInput.value;
  $nameInput.value = "";
  localStorage.setItem(USERNAME_KEY, inputData);
  setGreeting();
  $loginForm.classList.add(CLASSNAME_HIDDEN);
}

function setGreeting() {
  const userName = localStorage.getItem(USERNAME_KEY);
  if (userName === null) {
    $greeting.textContent = `Hello my super star!`;
    $loginForm.classList.remove(CLASSNAME_HIDDEN);
    $todos.classList.add(CLASSNAME_HIDDEN);
  } else {
    $greeting.textContent = `Hello ${userName}`;
    $loginForm.classList.add(CLASSNAME_HIDDEN);
    $todos.classList.remove(CLASSNAME_HIDDEN);
  }
}

$loginForm.addEventListener("submit", onSubmitLogin);
