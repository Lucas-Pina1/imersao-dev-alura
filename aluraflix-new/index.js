function adicionarFilme() {
  let listaFilmes = [{
    img: '',
    nome: '',
    trailer: ''
  }];

  let filmeFavorito = document.getElementById("filme").value;
  let nomefilme = document.getElementById("nome").value;
  let trailerFilme = document.getElementById("trailer").value;

  let elementoListaFilmes = document.getElementById("listaFilmes");

  if (filmeFavorito != "" || nomefilme != "" || trailerFilme != "") {
    listaFilmes.push({
      img: filmeFavorito,
      nome: nomefilme,
      trailer: trailerFilme,
    });

    for (let index = 0; index < listaFilmes.length; index++) {
      elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML +
        `<a target="_blank" href=${listaFilmes[i].trailer}>
            <img src=${listaFilmes[i].img}>
            <p>${listaFilmes[i].nome}</p>
        </a>`;

      document.getElementById("filme").value = "";
      document.getElementById("filme").value = "";
      document.getElementById("trailer").value = "";
    }
  }
}
