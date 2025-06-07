
document.addEventListener('DOMContentLoaded', function() {
  // Add simple anti-spam or interactivity later
  const form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      alert('Thanks for reaching out! This demo form does not actually send emails yet.');
      e.preventDefault();
    });
  }
});
