function adicionarFilme() {
  const listaFilmes = [];
  const listaTitulos = [];
  const listaTrailers = [];

  const filmeFavorito = document.getElementById("filme").value;
  const nomefilme = document.getElementById("nome").value;
  const trailerFilme = document.getElementById("trailer").value;

  if (
    filmeFavorito.endsWith("jpg") ||
    filmeFavorito.endsWith("png") ||
    (filmeFavorito.endsWith("jpeg") && filmeFavorito != "") ||
    nomefilme != "" ||
    trailerFilme != ""
  ) {
    listaFilmes.push(filmeFavorito);
    listaTitulos.push(nomefilme);
    listaTrailers.push(trailerFilme);

    mostrarFilmes(listaFilmes, listaTitulos, listaTrailers);
    limparInputs();
  }
}

function mostrarFilmes(listaFilmes, listaTitulos, listaTrailers) {
  const divFilmes = document.getElementById("listaFilmes");

  for (let i = 0; i < listaFilmes.length; i++) {
    divFilmes.innerHTML =
      divFilmes.innerHTML +
      `<div>
        <a target="_blank" href=${listaTrailers[i]}>
          <img src=${listaFilmes[i]}>
        </a>
        <h3>${listaTitulos[i]}</h3>
      </div>`;
  }
}

function limparInputs() {
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("trailer").value = "";
}

function removerFilme() {
  const divFilmes = document.getElementById("listaFilmes");

  divFilmes.innerHTML = "";

  limparInputs();
}
