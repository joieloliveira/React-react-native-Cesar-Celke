SEQUENCIA PARA CRIAR O PROJETO
Rodar o projeto usando o nodemon
### nodemon app.js

Criar o aquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

Instalar o banco de dados MongoDB
### npm install --save mongodb

Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JacaScript para que possam ser utilizados pela aplicação
### npm install --save mongoose

Permitir acesso a API
### npm install --save cors

Gerar o backup do banco de dados MongoDB
### mongodump --db celke --out c:\data\db

Restaurar o backup do banco de dados MongoDB
### mongorestore --db celke c:\data\db\celke