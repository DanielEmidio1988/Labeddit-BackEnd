# LABEDDIT - BACK-END

## 📖 Introdução

Este é um projeto Web Full Stack desenvolvido no Bootcamp Labenu, dividido em 2 repositórios (Labeddit-BackEnd e Labeddit-FrontEnd), onde o usuário tem acesso a rede social Labeddit. Dentro da aplicação, você poderá criar seu cadastro e interagir com as publicações (curtir, comentar, editar) de outros usuários.

API construida para o gerenciamento das informações da Base de Dados da aplicação do Labeddit, onde você pode manipular informações de cadastro de usuários e publicações.

## 🔗Link de Acesso
- Deploy Render: [clique aqui!](https://labedditbackend.onrender.com) 
- Labeddit-FrontEnd: [clique aqui!](https://github.com/DanielEmidio1988/Labeddit-FrontEnd)

## 👥Equipe
- DANIEL EMIDIO

## 🧭Status do Projeto
- ⏳Concluido

### 📄Concepção do Projeto
Documentação Postman: [clique aqui!]('https://documenter.getpostman.com/view/24460616/2s93JnUmbg')

Para este projeto, são modelados 5 entidades: USERS(usuários), POSTS(publicação), COMMENTS(comentários), LIKES_DISLIKES(likes e dislikes publicações), LIKES_DISLIKES(likes e dislikes comentários).

- users: id, username, email, password, role, created_at;
- posts: id, creator_id, content, comments, likes, dislikes, created_at, updated_at;
- comments: id, creator_id, content, comments, likes, dislikes, created_at, updated_at, post_id;
- likes_dislikes: user_id, post_id, likes;
- likes_dislikes_comments: user_id, comments_id, likes;
![Preview](./src/assets/diagram.png)

Ao todo, foram aplicados testes unitários em 70% da aplicação.
![Preview](./src/assets/coverage.png)

### Endpoints
- Get Users: Retorna todos os usuários cadastrados;
- Post Signup: Cadastro de nova conta.
- Post Login: Informe de Login e Senha para acesso a aplicação.
- Get Posts: Retorna todos as publicações cadastradas.
- Post 'Post': Cadastra uma nova publicação.
- Post Comment: Cadastra um novo comentário.
- Put Edit Post: Edita uma publicação a partir do 'Id' da publicação.
- Delete Post: Deleta uma publicação existente a partir do 'Id' da publicação.
- Put Like or Dislike: Envia um 'like' (1) ou 'dislike' (0) a uma publicação ou comentário.

### Bibliotecas utilizadas
- cors: biblioteca para liberar acesso externo ao servido;
- express : framework para criar o servidor (API);
- knex: biblioteca query builder para conectar com banco de dados;
- sqlite3: biblioteca do banco de dados SQLite;
- uuid: biblioteca para geração de Identificador Único Universal;
- dotenv: biblioteca de variáveis de ambiente;
- jsonwebtoken: biblioteca para geração de tokens;
- bcryptjs: biblioteca para criptografia de senhas;

## 🛰Executando o Projeto
- npm install: Instala todas as dependências listadas no package.json;
- npm run dev: Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor localhost (padrao 3003) toda a vez que o projeto for alterado e salvo.

## 💡Programas utilizados:
- Postman API Platform
- VSCode

## 💻Tecnologias 

![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

## 📫 Contato

E-mail: emidio.daniel@hotmail.com

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielemidio1988/)
[![Codewars](https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=Codewars&logoColor=white)](https://www.codewars.com/users/DanielEmidio1988)
