window.addEventListener("scroll", function() {
    const cabecalho = this.document.getElementById("cabecalho");

    if (window.scrollY > 50) {
        cabecalho.classList.add("shrink");
    } else {
        cabecalho.classList.remove("shrink");
    }
})