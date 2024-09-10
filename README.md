# Project_Sport
Projeto desenvolvido com base aos esportistas das olimpíadas com disponibilidade a procura. 

Aplicação de Busca de Atletas
- Descrição
Esta aplicação web permite pesquisar por atletas em um banco de dados. O usuário digita o nome de um atleta ou uma palavra-chave relacionada e a aplicação exibe os resultados correspondentes, incluindo nome, descrição e um link para mais informações.

Estrutura dos Arquivos
- index.html: Arquivo principal que contém a estrutura HTML da página.
- style.css: Arquivo CSS responsável pelo estilo visual da página.
- dados.js: Arquivo JavaScript que contém o array dados com as informações dos atletas (ex: nome, descrição, link).
- app.js: Arquivo JavaScript que contém a lógica da aplicação, incluindo a função pesquisar().

Funcionamento
- Interface do Usuário: O usuário digita o termo de pesquisa em um campo de input e clica no botão "Pesquisar".
Função pesquisar():
- Obtém o valor do campo de pesquisa e o converte para minúsculas para facilitar a comparação.
- Itera sobre o array dados, comparando o termo de pesquisa com o título, descrição e tags de cada atleta.
- Constrói uma string HTML com os resultados encontrados, incluindo nome, descrição e link para cada atleta.
- Atualiza a seção de resultados na página com a string HTML construída.

- Exibição dos Resultados: Os resultados da pesquisa são exibidos em uma lista, onde cada item representa um atleta encontrado.

Como Utilizar
- Clonar o repositório: Clone este repositório para sua máquina local.
- Abrir os arquivos: Abra os arquivos index.html, style.css, dados.js e app.js em um editor de código.
 
Personalizar:
- Dados: Edite o arquivo dados.js para adicionar ou modificar os dados dos atletas.
- Estilo: Personalize o estilo da página editando o arquivo style.css.
- Abrir no navegador: Abra o arquivo index.html em um navegador web para visualizar a aplicação.

Tecnologias Utilizadas
- HTML: Estrutura da página.
- CSS: Estilização da página.
- JavaScript: Lógica da aplicação.
