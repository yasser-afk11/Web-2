document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Create a simple message div
  const messageDiv = document.createElement('div');
  messageDiv.style.position = 'fixed';
  messageDiv.style.top = '20px';
  messageDiv.style.right = '20px';
  messageDiv.style.padding = '15px 20px';
  messageDiv.style.borderRadius = '5px';
  messageDiv.style.color = 'white';
  messageDiv.style.zIndex = '10000';
  messageDiv.style.fontWeight = 'bold';
  
  // Show sending message
  messageDiv.textContent = '📤 Message sending...';
  messageDiv.style.background = '#17a2b8';
  document.body.appendChild(messageDiv);

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
    // Change to success message
    messageDiv.textContent = '✅ Message sent successfully!';
    messageDiv.style.background = '#28a745';
    form.reset();
    
    // Remove message after 3 seconds
    setTimeout(() => {
      document.body.removeChild(messageDiv);
    }, 3000);
  })
  .catch(error => {
    console.error("Error!", error.message);
    // Change to error message
    messageDiv.textContent = '❌ Error sending message';
    messageDiv.style.background = '#dc3545';
    
    // Remove message after 5 seconds
    setTimeout(() => {
      document.body.removeChild(messageDiv);
    }, 5000);
  });
});
