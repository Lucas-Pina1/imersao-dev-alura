let numeroSecreto = parseInt(Math.random() * 1001);
let numeroChute = null;

for (let contador = 0; numeroChute != numeroSecreto; contador++) {
  let tentativa = (contador += 1);
  numeroChute = parseInt(prompt("Digite um numero entre 0 e 1000"));

  if (numeroChute === numeroSecreto) {
    alert(`Acertou! Voĉe acertou na ${tentativa} tentativa`);
  } else if (numeroChute < numeroSecreto) {
    alert(`Errou... o numero é maior do que ${numeroChute}`);
    alert(`Tentativa de numero ${tentativa}, tente outra vez `);
  } else if (numeroChute > numeroSecreto) {
    alert(` Errou... o numero é menor do que ${numeroChute}`);
    alert(`Tentativa de numero ${tentativa}, tente outra vez `);
  }
}


// while (numeroChute != numeroSecreto) {

// }

