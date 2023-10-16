const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const cardNumberInput = document.getElementById('cardNumber');
  const expiryInput = document.getElementById('expiry');
  const cvvInput = document.getElementById('cvv');

  const cardNumber = cardNumberInput.value.trim();
  const expiry = expiryInput.value.trim();
  const cvv = cvvInput.value.trim();

  const cardNumberPattern = /^\d{16}$/;
  const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvPattern = /^\d{3}$/;

  if (!cardNumberPattern.test(cardNumber)) {
    alert('Invalid card number format. Please enter a 16-digit number.');
    return;
  }

  if (!expiryPattern.test(expiry)) {
    alert('Invalid expiry date format. Please enter it in the format "MM/YY".');
    return;
  }

  if (!cvvPattern.test(cvv)) {
    alert('Invalid CVV. Please enter a 3-digit number from the back of your card.');
    return;
  }

  alert('Payment successful!');
});