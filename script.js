<<<<<<< HEAD
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
=======
<script>
function scrollToTrailer() {
    document.getElementById("trailer").scrollIntoView({
        behavior: "smooth"
    })
}
</script>
>>>>>>> 054ba77c9e65bee8120dc8784081f1a85e588ef6
