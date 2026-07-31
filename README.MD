# 🍣 Ching Chong Sushi - Sistema de Gerenciamento de Cardápio

Sistema web para gerenciamento e visualização de cardápio desenvolvido como projeto full stack.

O projeto possui uma área pública para exibição dos produtos e um painel administrativo para gerenciamento dos itens do cardápio.

---

# 🚀 Funcionalidades

## Área pública

* Visualização do cardápio
* Exibição dos produtos com:

  * Nome
  * Descrição
  * Categoria
  * Preço
  * Imagem

## Painel administrativo

* Login administrativo
* Proteção das rotas administrativas
* Cadastro de itens
* Edição de itens
* Remoção de itens
* Upload de imagens

---

# 🛠️ Tecnologias utilizadas

## Front-end

* HTML5
* CSS3
* JavaScript
* Fetch API
* ES Modules

## Back-end

* Node.js
* Express
* CORS
* Express File Upload
* API REST
* Banco de dados local em JSON

---

# 📂 Estrutura do projeto

```
Projeto-Codelab
│
├── imgs
│   └── imagens utilizadas no frontend
│
├── src
│   │
│   ├── menu.html
│   ├── paineladm.html
│   ├── gerenciaritem.html
│   ├── editar-item.html
│   ├── additem.html
│   ├── login.html
│   └── menu.css
├── scripts
│   ├── additem.js
│   ├── api.js
│   ├── auth.js
│   ├── card.js
│   ├── listarItens.js
│   ├── login.js
│   └── painel.js
│
│   
│
└── back-end
    │
    ├── src
    │   │
    │   ├── controllers
    │   │   └── menu.controller.js
    │   │   └── auth.controller.js
    │   │
    │   ├── routes
    │   │   ├── menu.routes.js
    │   │   └── auth.routes.js
    │   │
    │   ├── services
    │   │   └── menu.service.js
    │   │   └── auth.service.js
    │   │
    │   ├── middlewares
    │   │   └── auth.middleware.js
    │   │
    │   ├── database
    │   │   └── menu.json
    │   │
    │   └── uploads
    │       └── imagens dos produtos
    │
    └── server.js
```

---

# ⚙️ Instalação

## Requisitos

* Node.js
* npm

---

## Clonar o projeto

```bash
git clone https://github.com/seu-usuario/Projeto-Codelab.git
```

---

## Instalar dependências

Acesse o backend:

```bash
cd back-end
```

Instale os pacotes:

```bash
npm install
```

---

# ▶️ Executando o projeto

Inicie o servidor:

```bash
node src/server.js
```

O servidor ficará disponível em:

```
http://localhost:3000
```

---

# 🔌 API

## Cardápio

### Listar itens

```
GET /menu
```

---

### Buscar item por ID

```
GET /menu/:id
```

---

### Criar item

```
POST /menu
```

Formato:

```
multipart/form-data
```

Campos:

```
nome
descricao
preco
categoria
imagem
```

---

### Editar item

```
PUT /menu/:id
```

---

### Remover item

```
DELETE /menu/:id
```

---

# 🔐 Autenticação

O painel administrativo utiliza autenticação por token.

Fluxo:

```
Login
  ↓
Validação das credenciais
  ↓
Geração do token
  ↓
Armazenamento no navegador
  ↓
Acesso ao painel administrativo
```

As rotas administrativas possuem proteção através de middleware.

---

# 🖼️ Upload de imagens

As imagens enviadas pelo administrador são armazenadas em:

```
back-end/src/uploads
```

Elas ficam disponíveis através da rota:

```
/uploads/nome-da-imagem
```

Exemplo:

```
http://localhost:3000/uploads/temaki.jpeg
```

---

# 🗃️ Banco de dados

O projeto utiliza um arquivo JSON como armazenamento local.

Exemplo:

```json
[
  {
    "id": 1,
    "nome": "Temaki de Salmão",
    "descricao": "Temaki preparado com salmão fresco",
    "preco": 35,
    "categoria": "temaki",
    "imagem": "temaki.jpeg"
  }
]
```

---

# 🏗️ Arquitetura do Backend

O backend segue uma arquitetura separada por responsabilidades.

## Routes

Responsáveis pelos endpoints da API.

Exemplo:

```
POST /menu
```

---

## Controllers

Responsáveis por:

* Receber requisições HTTP
* Validar dados
* Retornar respostas

---

## Services

Responsáveis pela lógica da aplicação:

* Leitura do JSON
* Escrita no JSON
* Criação
* Atualização
* Busca
* Remoção

---

## Middlewares

Responsáveis por funcionalidades intermediárias:

* Autenticação
* Upload de arquivos
* Controle das requisições

---

# 👨‍💻 Projeto

Desenvolvido para ingresso no grupo de extensão CodeLab com objetivo de aplicar conceitos de desenvolvimento web.

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos.
