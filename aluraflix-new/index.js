const listaFilmes = [];

function adicionarFilme() {
  const imagemFilme = document.getElementById("filme").value;
  const nomefilme = document.getElementById("nome").value;
  const trailerFilme = document.getElementById("trailer").value;

  const filme = {
    imagem: imagemFilme,
    titulo: nomefilme,
    trailer: trailerFilme,
  };

  const seForUmaImagem =
    imagemFilme.endsWith("jpg") ||
    imagemFilme.endsWith("png") ||
    imagemFilme.endsWith("jpeg");

  const seInputsNaoForVazios =
    imagemFilme != "" || nomefilme != "" || trailerFilme != "";

  if (seForUmaImagem || seInputsNaoForVazios) {
    listaFilmes.push(filme);

    renderizarFilmes();
    limparInputs();
  }
}

function renderizarFilmes() {
  const divFilmes = document.getElementById("listaFilmes");
  divFilmes.innerHTML = "";

  for (let i = 0; i < listaFilmes.length; i++) {
    divFilmes.innerHTML =
      divFilmes.innerHTML +
      `<div>
        <a target="_blank" href=${listaFilmes[i].trailer}>
          <img src=${listaFilmes[i].imagem}>
        </a>
        <h3>${listaFilmes[i].titulo}</h3>
      </div>`;
  }
}

function limparInputs() {
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("trailer").value = "";
}

function removerFilme() {
  listaFilmes.pop();
  limparInputs();
  renderizarFilmes();
}
