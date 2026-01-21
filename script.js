function scrollToSection() {
  document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
}

function acceptValentine() {
  document.getElementById('response').innerHTML =
    "💖 Request Accepted. Valentine Status: CONFIRMED 💖";
}
