/*=== === === === === === === === ===
~~~~ JavaScript ToDo List Code ~~~~
=== === === === === === === === ===*/

// Declare Variables :
const form = document.getElementById("form");
const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");
const clearAll = document.querySelector("[data-clear]");
const output = document.getElementsByClassName("task")[0];

addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (e) {
    // Prevent Default
    e.preventDefault();
    const template = `
    <label class="container">
      ${input.value}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  `;
    output.innerHTML += template;
  });

  submitBtn.addEventListener("click", function () {
    setTimeout(function () {
      input.value = "";
    }, 500);
    clearAll.innerText = "Clear All";
  });

  clearAll.addEventListener("click", function (e) {
    /* fix some bugs here when the task is empty we show a msg and prevent default */
    if (document.getElementsByClassName("container").length > 0) {
      confirm("You are goin to clear all the tasks.?");
      output.innerHTML = "";
    }
    if (document.getElementsByClassName("container").length == 0) {
      this.innerText = "its already empty";
    }
  });

  document.getElementById("checkmark").addEventListener("click", () => {
    alert("congratulation you fishe your task");
  });
});
