const listaFilmes = [];

function adicionarFilme() {
  const filmeFavorito = document.getElementById("filme").value;
  const nomefilme = document.getElementById("nome").value;
  const trailerFilme = document.getElementById("trailer").value;

  const filme = {
    imagem: filmeFavorito,
    titulo: nomefilme,
    trailer: trailerFilme,
  };

  const seForUmaImagem =
    filmeFavorito.endsWith("jpg") ||
    filmeFavorito.endsWith("png") ||
    filmeFavorito.endsWith("jpeg");

  const seInputsForVazios =
    filmeFavorito != "" || nomefilme != "" || trailerFilme != "";

  if (seForUmaImagem || seInputsForVazios) {
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
