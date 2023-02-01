let listaFilmes = [
  {
    filme: "interstrellar",
    src: "http://recantoadormecido.com.br/wp-content/uploads/2014/09/INTERSTELLAR-Official-Poster-Banner-PROMO-XLG-17SETEMBRO2014.jpg",
  },
  {
    filme: "whiplash",
    src: "https://i.ebayimg.com/images/g/pLYAAOSw3v5Yt~VZ/s-l1600.jpg",
  },
  {
    filme: "A chegada",
    src: "https://i.ytimg.com/vi/WwW1nqV3pI0/movieposter_en.jpg",
  },
];

for (let i = 0; i < listaFilmes.length; i++) {
  let verificarJPG = listaFilmes[i].src.split(".");
  const ultimoElementoJpg = verificarJPG[verificarJPG.length - 1];

  if (ultimoElementoJpg === "jpg") {
    document.write(
      `<div> 
        <img src=${listaFilmes[i].src}> 
        <p>${listaFilmes[i].filme}</p>
      </div>
      `
    );
  }
}
