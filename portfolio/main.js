// === DARK MODE TOGGLE ===
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// === EMAILJS CONTACT FORM ===
const contactForm = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Replace with your actual EmailJS info
  emailjs.sendForm('service_4mz0kvl', 'template_xcgihf1', this, '7fbVO7tjIyR4HTJhG')
    .then(() => {
      messageBox.textContent = "Message sent successfully!";
      messageBox.style.color = "green";
      contactForm.reset();
    }, (error) => {
      messageBox.textContent = "Something went wrong. Try again!";
      messageBox.style.color = "red";
      console.error(error);
    });
});
