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