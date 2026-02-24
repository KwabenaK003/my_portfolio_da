function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText =
        "Thank you for reaching out. I will respond shortly.";
    this.reset();
});
