function pesquisar() {
    // Declara uma função chamada 'pesquisar' que será responsável por exibir os resultados da pesquisa.
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a referência para a seção HTML com o ID "resultados-pesquisa". 
    // Essa seção será usada para exibir os resultados da pesquisa.
  
    console.log(section);


    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa == ""){
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>"
      return
    }


    campoPesquisa = campoPesquisa.toLowerCase()


    // Exibe no console do navegador o elemento HTML que foi obtido. 
    // Isso é útil para depuração e verificação.
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // A cada iteração do loop, novos resultados serão concatenados a essa string.
  
    for (let dado of dados) {
      titulo= dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">
                ${dado.titulo}
              </a>
            </h2>
            <p class="descricao-meta">
              ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">
              Mais informações
            </a>
          </div>
        `;

      }
      
      if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
      }

      // Inicia um loop 'for...of' para iterar sobre cada elemento do array 'dados'.
      // A variável 'dado' representará cada objeto do array em cada iteração.
  
      // Concatena uma nova div com as informações do atleta atual à string 'resultados'.
      // As informações são obtidas das propriedades 'titulo', 'descricao' e 'link' do objeto 'dado'.
    }
  
    section.innerHTML = resultados;
    // Atribui o conteúdo da string 'resultados' ao atributo 'innerHTML' da seção.
    // Isso substitui o conteúdo HTML anterior da seção pelos novos resultados da pesquisa.
  }