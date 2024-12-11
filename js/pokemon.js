(async () => {
  const getPokemonImg = async (url) => {
    let imgUrl = "";
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          imgUrl = data.sprites.front_default;
        } catch (error) {
          console.error("Ocurrió un error:", error);
        }
    return imgUrl;
  };

  const createCardsPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const boxParentPokemon = document.querySelector("#box-parent-pokemon");

      data.results.forEach(async (element) => {
        console.log(element);
        const article = document.createElement("article");
        article.classList.add("box-parent-pokemon__children");

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        const imgUrl = await getPokemonImg(element.url);
        img.setAttribute("src", imgUrl);
        img.setAttribute("alt", "section-products");

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = element.name;

        figure.append(img);
        figure.append(figcaption);
        article.append(figure);
        boxParentPokemon.append(article);
      });
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  };

  createCardsPokemon();
})();
