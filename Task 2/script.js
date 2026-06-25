const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();

  let email = document.getElementById("email").value.trim();

  let message = document.getElementById("message").value.trim();

  let error = document.getElementById("error");

  error.style.color = "red";

  if (name === "") {
    error.innerText = "Please enter your name";
    return;
  }

  if (email === "") {
    error.innerText = "Please enter your email";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    error.innerText = "Please enter a valid email";
    return;
  }

  if (message === "") {
    error.innerText = "Please enter your message";
    return;
  }

  error.style.color = "green";
  error.innerText = "Form submitted successfully!";

  form.reset();
});
