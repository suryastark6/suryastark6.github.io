const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

 
  if (!username || !email || !password) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Invalid email address.');
    return;
  }

  if (!passwordPattern.test(password)) {
    alert('Password must be at least 8 characters long and contain at least one letter and one number.');
    return;
  }

  
  alert('Registration successful!');
});