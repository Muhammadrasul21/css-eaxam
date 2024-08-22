const hamburger = document.querySelector(".navbar__sidebar");

function showHamburger() {
    hamburger.style.display = "block"
}

function closeHamburger() {
    hamburger.style.display = "none"
}


const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }
})