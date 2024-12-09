document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Empêche l'envoi du formulaire pour validation
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  if (name && email) {
    alert('Merci pour votre message, ' + name + '!');
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});
