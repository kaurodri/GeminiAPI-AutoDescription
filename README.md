# GeminiAPI - Servidor Local com Node.js
**[ Imersão Dev Back-End ]**

Este projeto é uma aplicação simples que envolve um backend desenvolvido com Express e MongoDB, e integra funcionalidades para upload de imagens, criação e atualização de posts, além de gerar descrições automáticas para as imagens usando a API Gemini do Google.

## Estrutura
O servidor, configurado em `server.js`, é uma aplicação Express que escuta na porta 3000 e configura um conjunto de rotas para o gerenciamento dos posts. A função de servir arquivos estáticos da pasta `uploads` permite que as imagens carregadas sejam acessadas pela aplicação. O arquivo `routes/postsRoutes.js` define as rotas principais, que incluem a listagem de posts, criação de novos posts, upload de imagens e atualização de posts com suas respectivas descrições.

A comunicação com o banco de dados é feita através de MongoDB, configurado em `dbConfig.js`. A função `conectarAoBanco` é responsável por estabelecer a conexão com o banco, utilizando uma string de conexão configurada em uma variável de ambiente. As operações de banco de dados são realizadas em `postsModel.js`, onde temos funções para listar todos os posts (`getTodosPosts`), criar novos posts (`criarPost`), e atualizar posts existentes (`atualizarPost`), utilizando o MongoDB Driver.

O controle das requisições para criação e manipulação de posts é feito no arquivo `postsController.js`, que gerencia três operações principais: `listarPosts`, que retorna todos os posts cadastrados; `postarNovoPost`, que cria um novo post no banco; e `atualizaNovoPost`, que atualiza o post com uma nova descrição gerada a partir de uma imagem.

A parte do upload de imagens é gerenciada com o uso do middleware `multer`, configurado no `postsRoutes.js`, que define onde as imagens serão armazenadas e como elas serão nomeadas. Quando uma imagem é carregada via POST, a imagem é movida para a pasta `uploads` e o banco de dados é atualizado com o caminho da imagem. Caso seja necessário atualizar um post com uma nova imagem, a imagem será lida, uma descrição será gerada com o auxílio da API Gemini, e essa descrição será salva no banco junto ao URL da imagem.

O serviço de geração de descrições para as imagens é implementado em `geminiService.js`, onde a imagem carregada é enviada para a API Gemini para que uma descrição textual seja gerada de forma automática. O modelo "gemini-1.5-flash" da Google é utilizado para gerar essas descrições, que são retornadas em formato de texto e associadas à imagem no banco de dados.

Assim, a aplicação permite que os usuários criem posts com imagens, gerem descrições automáticas dessas imagens e atualizem os posts com novos dados, tudo isso através de um conjunto de rotas bem definidas e interações com o banco de dados MongoDB e a API Gemini para gerar descrições de imagens.