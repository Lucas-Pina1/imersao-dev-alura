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

function adicionarJogador() {
  const valorInputJogador = document.getElementById("jogador").value;

  const jogador = {
    nome: valorInputJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  };

  if (valorInputJogador != "") {
    jogadores.push(jogador);

    renderizarTabela();

    document.getElementById("jogador").value = "";
  } else {
    alert("nenhum jogador indentidicado");
  }
}

function removerJogador() {
  jogadores.pop();
  renderizarTabela();
}

function resetarPontos() {
  jogadores.forEach((jogador) => {
    jogador.vitoria = 0;
    jogador.empate = 0;
    jogador.derrota = 0;
    jogador.pontos = 0;
  });
  renderizarTabela();
}

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
      <td><button onClick="adicionarEmpate()">Empate</button></td>
      <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
    </tr>
`;
  }
}

function adicionarVitoria(index) {
  jogadores[index].vitoria++;
  jogadores[index].pontos += 3;
  renderizarTabela();
}

function adicionarEmpate() {
  jogadores.forEach((jogador) => {
    jogador.empate++;
    jogador.pontos++;
  });
  renderizarTabela();
}

function adicionarDerrota(index) {
  jogadores[index].derrota++;
  renderizarTabela();
}
