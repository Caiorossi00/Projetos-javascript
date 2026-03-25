const imagens = [
  "https://images.unsplash.com/photo-1774230380285-bb1104cef073?q=80&w=1073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590668403478-8aa3e0f0c294?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590595337004-8a4c0a9af092?q=80&w=1170&auto=format&fit=crop",
];

const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");

modal.style.display = "none";

function renderizarGaleria() {
  imagens.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.width = 150;

    img.addEventListener("click", () => {
      abrirModal(src);
    });

    galeria.appendChild(img);
  });
}

function abrirModal(src) {
  imagemModal.src = src;
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
}

renderizarGaleria();
