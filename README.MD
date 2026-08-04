# 🍣 Ching Chong Sushi

Sistema web full stack para gerenciamento de cardápio de um restaurante japonês.

O projeto possui uma área pública para visualização do cardápio e um painel administrativo protegido por autenticação, permitindo o gerenciamento completo dos produtos.

---

# 📸 Funcionalidades

## Área Pública

- Visualização do cardápio
- Listagem dos produtos por categoria
- Exibição de:
  - Nome
  - Descrição
  - Preço
  - Categoria
  - Imagem

## Painel Administrativo

- Login administrativo
- Autenticação por token
- Cadastro de produtos
- Edição de produtos
- Remoção de produtos
- Upload de imagens
- Gerenciamento dos pedidos

---

# 🛠️ Tecnologias

## Front-end

- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API

## Back-end

- Node.js
- Express
- express-fileupload
- CORS

## Banco de Dados

- JSON local

---

# 📁 Estrutura do Projeto

```text
Projeto-Codelab
│
├── public
│   ├── imgs
│   ├── scripts
│   │   ├── additem.js
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── card.js
│   │   ├── carrinho.js
│   │   ├── editItem.js
│   │   ├── index.js
│   │   ├── listarItens.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   └── painel.js
│   │
│   ├── additem.html
│   ├── editar-item.html
│   ├── gerenciaritem.html
│   ├── index.html
│   ├── login.html
│   ├── menu.css
│   ├── paineladm.html
│   └── pedidosrecebidos.html
│
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   ├── menu.controller.js
│   │   └── pedidos.controller.js
│   │
│   ├── database
│   │   ├── menu.json
│   │   └── pedidos.json
│   │
│   ├── middlewares
│   │   └── auth.middleware.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   ├── menu.routes.js
│   │   └── pedidos.routes.js
│   │
│   ├── services
│   │   ├── auth.service.js
│   │   ├── menu.service.js
│   │   └── pedidos.service.js
│   │
│   └── uploads
│
├── server.js
├── package.json
└── README.md
```

---

# 🚀 Como executar

## Requisitos

- Node.js 18+
- npm

---

## Clonar o projeto

```bash
git clone https://github.com/yspread/Projeto-Codelab.git
```

Entre na pasta:

```bash
cd Projeto-Codelab
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
node server.js
```

O sistema ficará disponível em:

```
http://localhost:3000
```

---

# 🌐 Rotas

## Front-end

| Página | URL |
|---------|-----|
| Cardápio | `/` |
| Login | `/login.html` |
| Painel Administrativo | `/paineladm.html` |
| Adicionar Item | `/additem.html` |
| Gerenciar Itens | `/gerenciaritem.html` |
| Editar Item | `/editar-item.html?id=` |

---

## API

### Cardápio

```http
GET /menu
```

Lista todos os produtos.

---

```http
GET /menu/:id
```

Busca um produto pelo ID.

---

```http
POST /menu
```

Cria um novo produto.

Tipo:

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

```http
PUT /menu/:id
```

Atualiza um produto existente.

---

```http
DELETE /menu/:id
```

Remove um produto.

---

### Autenticação

```http
POST /auth/login
```

Realiza o login do administrador.

---

```http
GET /auth/verificar
```

Verifica se o token é válido.

---

### Pedidos

```http
GET /pedidos
```

Lista todos os pedidos.

---

```http
POST /pedidos
```

Cria um novo pedido.

Exemplo:

```json
{
    "idItem": 8,
    "quantidade": 2,
    "mesa": 4
}
```

---

# 🔐 Autenticação

O painel administrativo é protegido por token.

Fluxo:

```text
Login
      │
      ▼
Validação das credenciais
      │
      ▼
Geração do Token
      │
      ▼
LocalStorage
      │
      ▼
Acesso às rotas administrativas
```

---

# 🖼️ Upload de Imagens

As imagens enviadas são armazenadas em:

```
back-end/uploads
```

Elas ficam disponíveis através da rota pública:

```
/uploads/<nome-da-imagem>
```

Exemplo:

```
http://localhost:3000/uploads/temaki.jpeg
```

---

# 🗃️ Banco de Dados

O projeto utiliza arquivos JSON para armazenamento local.

- `menu.json`
- `pedidos.json`

Exemplo de item:

```json
{
    "id": 1,
    "nome": "Temaki de Salmão",
    "descricao": "Temaki preparado com salmão fresco.",
    "preco": 32.90,
    "categoria": "temakis",
    "imagem": "1758845300123-temaki.jpeg"
}
```

---

# 🏛️ Arquitetura

O backend segue uma arquitetura em camadas.

### Routes

Define os endpoints da aplicação.

### Controllers

Recebem as requisições HTTP e retornam as respostas.

### Services

Contêm a lógica de negócio e manipulam os dados.

### Middlewares

Responsáveis por funcionalidades compartilhadas, como autenticação.

### Database

Persistência utilizando arquivos JSON.

---

# 👨‍💻 Autores

**Giovanni Bullo**
**Giovanna Maruyama**
**Henrique Sanchez**
**Rafael  Diesner**

Projeto desenvolvido para o processo seletivo do grupo de extensão **CodeLab**, aplicando conceitos de desenvolvimento web full stack com Node.js, Express e JavaScript.

---

# 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.
