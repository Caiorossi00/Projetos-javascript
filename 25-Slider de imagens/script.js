const imagens = [
  "https://images.unsplash.com/photo-1774230380285-bb1104cef073?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590668403478-8aa3e0f0c294?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1590595337004-8a4c0a9af092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let index = 0;

const img = document.getElementById("imagem");

function mostrarImagem() {
  img.src = imagens[index];
}

function proximo() {
  index++;

  if (index >= imagens.length) {
    index = 0;
  }

  mostrarImagem();
}

function anterior() {
  index--;

  if (index < 0) {
    index = imagens.length - 1;
  }

  mostrarImagem();
}

mostrarImagem();
