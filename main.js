const hamburger = document.querySelector(".navbar__sidebar");

function showHamburger() {
    hamburger.style.right = "0";
}

function closeHamburger() {
    hamburger.style.right = "-50%";
}