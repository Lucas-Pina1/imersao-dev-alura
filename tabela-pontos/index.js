const jogadores = [
  {
    nome: "Lucas",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Gustavo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Marco",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Ricardo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
];

renderizarTabela();

function renderizarTabela() {
  const elementoTabela = document.getElementById("tabelaJogadores");
  elementoTabela.innerHTML = "";

  for (let index = 0; index < jogadores.length; index++) {
    elementoTabela.innerHTML += `
    <tr>
      <td>${jogadores[index].nome}</td>
      <td>${jogadores[index].vitoria}</td>
      <td>${jogadores[index].empate}</td>
      <td>${jogadores[index].derrota}</td>
      <td>${jogadores[index].pontos}</td>
      <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
    </tr>
`;
  }
}

function adicionarVitoria(index) {
  const jogadorAtual = jogadores[index];
  jogadorAtual.vitoria++;
  jogadorAtual.pontos += 3;
  renderizarTabela();
}

function adicionarEmpate(index) {
  const jogadorAtual = jogadores[index];
  jogadorAtual.empate++;
  renderizarTabela();
}

function adicionarDerrota(index) {
  const jogadorAtual = jogadores[index];
  jogadorAtual.derrota++;
  renderizarTabela();
}
