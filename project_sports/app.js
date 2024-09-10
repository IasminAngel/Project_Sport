function pesquisar() {
  // Obtém a referência para a seção onde os resultados serão exibidos
  const sectionResultados = document.getElementById("resultados-pesquisa");
  
  // Obtém o valor do campo de pesquisa e converte para minúsculas para facilitar a comparação
  const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!termoPesquisa) {
    sectionResultados.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
    return;
  }

  // Inicializa uma string para armazenar os resultados da pesquisa
  let resultadosHTML = "";

  // Itera sobre os dados, comparando o termo de pesquisa com o título, descrição e tags
  for (const dado of dados) {
    const { titulo, descricao, tags } = dado; // Desestruturação para melhor legibilidade
    const tituloMinusculo = titulo.toLowerCase();
    const descricaoMinuscula = descricao.toLowerCase();
    const tagsMinusculas = tags.toLowerCase();

    if (tituloMinusculo.includes(termoPesquisa) ||
        descricaoMinuscula.includes(termoPesquisa) ||
        tagsMinusculas.includes(termoPesquisa)) {
      // Cria um novo elemento div para cada resultado encontrado
      resultadosHTML += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${titulo}</a>
          </h2>
          <p class="descricao-meta">${descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem
  if (!resultadosHTML) {
    resultadosHTML = "<p>Nada foi encontrado</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
  sectionResultados.innerHTML = resultadosHTML;
}