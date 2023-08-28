var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");
var spans = document.querySelectorAll("span.error");
form.addEventListener("submit", (event) => {
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].validity.valid) {
      if (inputs[i].validity.valueMissing) {
        spans[i].textContent = `${inputs[i].getAttribute(
          "placeholder"
        )} cannot be empty`;
      }
      if (inputs[i].validity.typeMismatch) {
        spans[i].textContent = "Looks like this is not an email";
      }
      inputs[i].className = "invalid";
    }
  }
  event.stopPropagation;
});
