// Show modal on page load
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modal').style.display = 'block';
});

// Close modal function
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Handle form submit
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simulate signup (in a real app, send to server)
  alert('Thanks for subscribing! Check your email for confirmation.');
  closeModal();
});

// Close modal if clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}