/*=== === === === === === === === ===
~~~~ JavaScript ToDo List Code ~~~~
=== === === === === === === === ===*/
const form = document.getElementById("form");
const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");
const clearAll = document.querySelector("[data-clear]");
const output = document.getElementsByClassName("task")[0];

addEventListener("DOMContentLoaded", function () {
  // Prevent Default
  form.addEventListener("submit", function (e) {
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
  });

  clearAll.addEventListener("click", function () {
    confirm("You are goin to clear all the tasks.?");
    output.innerHTML = "";
  });
});
