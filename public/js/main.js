let animado = document.querySelectorAll(".nav");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  for (var i = 0; i < animado.length; i++) {
    if (scrollTop === 800) {
      animado[i].style.backgroundColor = "#090b13";
    }
  }
}

window.addEventListener("scroll", mostrarScroll);
