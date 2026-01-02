const form = document.getElementById('sheetdb-form');
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  
  const submitBtn = form.querySelector('button');
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  fetch(form.action, {
    method : "POST",
    body: new FormData(form),
  }).then(response => response.json())
    .then((data) => {
      // Modern UI Feedback
      msg.innerHTML = "✔ Message received! I'll get back to you soon.";
      msg.style.color = "#64ffda"; // Your accent color
      form.reset();
      
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
      
      // Clear message after 5 seconds
      setTimeout(() => { msg.innerHTML = "" }, 5000);
    }).catch((error) => {
      msg.innerHTML = "❌ Error! Please try again later.";
      msg.style.color = "#ff4d4d";
      submitBtn.disabled = false;
      submitBtn.innerText = "Send Message";
    });
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));
