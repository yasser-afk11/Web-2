document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const formObject = Object.fromEntries(data.entries());

  // 👉 Replace with your actual script URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbyu_JWY8ECfhJvG_zD5zsiWtpm8j4fgLj1oP-IZ7owdMlU-XnrY1uiQmtXyoKyyTdrJbQ/exec";

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams(formObject)
  })
  .then(response => response.json())
  .then(result => {
    alert("✅ Message sent successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("❌ Error sending message.");
  });
});
