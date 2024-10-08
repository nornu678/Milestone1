function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
function validateForm() {
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value;
  if (name.length < 2 || name.length > 50) {
    document.getElementById("nameError").innerText = "Name must be between 2 and 50 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Phone number validation
  const phone = document.getElementById("phone").value;
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone number must be 10 digits.";
    valid = false;
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  // Address validation
  const address = document.getElementById("address").value;
  if (address.length === 0 || address.length > 100) {
    document.getElementById("addressError").innerText = "Address is required and must not exceed 100 characters.";
    valid = false;
  } else {
    document.getElementById("addressError").innerText = "";
  }

  // City validation
  const city = document.getElementById("city").value;
  if (city.length < 2 || city.length > 50) {
    document.getElementById("cityError").innerText = "City must be between 2 and 50 characters.";
    valid = false;
  } else {
    document.getElementById("cityError").innerText = "";
  }

  // State validation
  const state = document.getElementById("state").value.toUpperCase();
  const statePattern = /^[A-Z]{2}$/;
  if (!statePattern.test(state)) {
    document.getElementById("stateError").innerText = "State must be exactly 2 uppercase letters.";
    valid = false;
  } else {
    document.getElementById("stateError").innerText = "";
  }

  // ZIP Code validation
  const zip = document.getElementById("zip").value;
  const zipPattern = /^\d{5}(-\d{4})?$/;
  if (!zipPattern.test(zip)) {
    document.getElementById("zipError").innerText = "ZIP Code must be 5 digits or 5+4 format (12345 or 12345-6789).";
    valid = false;
  } else {
    document.getElementById("zipError").innerText = "";
  }

  return valid; // If valid is false, the form will not submit