<h1 align="center">API-rest 👨🏻‍💻</h1>

> Uma API REST simples para consumo de dados

<div align="center">
 <h3 align="center">Tecnologias utilizadas:</h3>
 
 [Badges]: <> ( Você pode procurar por badges aqui: https://github.com/alexandresanlim/Badges4-README.md-Profile )
 
![Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Badge](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Badge](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)

</div>

## 🚀 Configuração do projeto

Para instalar, siga estas etapas:

Clone o projeto e execute o comando no diretório raiz:
```
npm install 
```

Configure o arquivo `.env` com seu banco de dados.
Exemplo:
```
DATABASE=nome da database
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=root

TOKEN_SECRET=sua secret key aqui
TOKEN_EXPIRATION=7d
```
Caso queira utilizar MariaDB, SQLite, PostgreSQL ou MSSQL, altere o arquivo `database.js` em `src/config` e, siga as instruções de <a href="https://sequelize.org/docs/v6/other-topics/dialect-specific-things/">Sequelize Dialects.</a>

## ☕ Usando API-rest

#### Execute estes comandos em seu CMD: 
```
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

Sua API deverá está rodando no endereço <a href="http://127.0.0.1:3001/">http://127.0.0.1:3001/.</a>

Os dados de usuário e senha dos arquivos de seed são:

<ul>
<li> email = admin@teste.com </li>
<li> senha = 123456 </li>
</ul>

Você pode obter o token JWT na rota `/token`, passando os dados JSON:

```json
{
	"email": "admin@teste.com",
	"password": "123456"
}
```

Headers
```
Content-Type	application/json; charset=utf-8
```

Teste a api [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=api-rest&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJoelson-Fernandes%2Fapi-rest%2Fmain%2Finsomnia%2FInsomnia_2022-08-04.json)

## 📲 Exemplos de retorno:
alunos:
```json
[
	{
		"id": 8,
		"nome": "Joelson",
		"sobrenome": "fernandes",
		"email": "joelson@teste.com",
		"idade": 30,
		"peso": 90.2,
		"altura": 1.85,
		"Fotos": [
			{
				"url": "http://localhost:3000/images/1658767215401_14424.jpg",
				"originalname": "p2.jpg",
				"filename": "1658767215401_14424.jpg"
			}
		]
	},
]
```
users:
```json
[
	{
		"id": 1,
		"nome": "admin",
		"email": "admin@teste.com"
	}
]
```
token:
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkB0ZXN0ZS5jb20iLCJpYXQiOjE2NTk0NDIyODQsImV4cCI6MTY2MDA0NzA4NH0.PhvrARIzuUPUa5mNf8WhCZqSd3UkiIRcuRZ7CBm0_Mg",
	"user": {
		"nome": "admin",
		"id": 1,
		"email": "admin@teste.com"
	}
}
```

Teste e aproveite! 😅

## 📫 Contribuindo para API-rest

Para contribuir, siga estes passos:

1. Fork este repositório.
2. Crie uma branch com seu nome de recurso: `git checkout -b mynewfeature`.
3. Faça suas alterações e confirme: `git commit -m 'messagehere'`
4. Push sua mudança para a branch principal: `git push origin mynewfeature`
5. Crie a solicitação pull request.

você pode verificar a documentação do GitHub [Criando uma Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


[⬆ Volte para o topo!](#api-rest)<br>
