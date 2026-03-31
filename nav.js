const toggleBtn = document.getElementById("toggleBtn");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change icon (☰ ↔ ×)
    if (toggleBtn.innerHTML === "☰") {
        toggleBtn.innerHTML = "×";
    } else {
        toggleBtn.innerHTML = "☰";
    }
});