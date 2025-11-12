window.addEventListener("scroll", function() {
    const cabecalho = this.document.getElementById("cabecalho");

    if (window.scrollY > 50) {
        cabecalho.classList.add("shrink");
    } else {
        cabecalho.classList.remove("shrink");
    }
})

// Ao dar "scroll" chama a função, que adiciona o elemento com o id "cabecalho" a variavel cabecalho, ai IF scroll foi maior que 50px add "shrink" do css se for menor q 50px (está no topo da página o "shrink" é deletado)



// --- EFEITO REVEAL AO SCROLL ---
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120; // quanto antes começa a aparecer

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Executa uma vez ao carregar
revealOnScroll();

