function scrollToTrailer() {
    document.getElementById("trailer").scrollIntoView({ behavior: "smooth" });
}

const fadeElements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});