document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");
    console.log("backToTopBtn:", backToTopBtn); // Check if backToTopBtn is found

    if (!backToTopBtn) {
        console.error("The backToTop button was not found in the DOM.");
        return; // Exit if the button is not found
    }

    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (navbar) {
            navbar.style.top = window.scrollY > lastScrollY ? "-70px" : "0";
        }
        lastScrollY = window.scrollY;

        // Show or hide the "Back to Top" button
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}