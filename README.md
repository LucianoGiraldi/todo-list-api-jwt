# 📝 To-Do List API com JWT e Painel Admin

API RESTful desenvolvida em Node.js com Express, MongoDB e autenticação JWT. Permite gerenciamento de tarefas com controle de acesso por usuário e funcionalidades administrativas para usuários com papel `admin`.

---

## 🚀 Funcionalidades

- Cadastro e login de usuários
- Autenticação com JWT
- Criação de tarefas pessoais
- Listagem de tarefas do usuário autenticado
- Atualização do status das tarefas (pendente/concluída)
- Atualização da própria senha
- Listagem e exclusão de usuários (admin)

---

## 📁 Estrutura de Pastas

```
src/
├── config/           # Conexão com o banco de dados
├── controllers/      # Lógica de negócio
├── models/           # Schemas do Mongoose
├── routes/           # Rotas organizadas por entidade
├── middlewares/      # Verificação de autenticação JWT
├── index.js          # Ponto de entrada da aplicação
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) rodando localmente ou na nuvem (ex: MongoDB Atlas)

---

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LucianoGiraldi/todo-list-api-jwt.git
cd todo-list-api-jwt
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e adicione:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo
JWT_SECRET=sua_chave_super_segura
```

---

## ▶️ Rodando o projeto

```bash
npm run dev
```

A API estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Endpoints principais

### Autenticação

- `POST /api/auth/signup` — Cadastro
- `POST /api/auth/login` — Login (retorna token JWT)

### Tarefas

- `POST /api/tasks` — Criar tarefa (requer token)
- `GET /api/tasks` — Listar tarefas do usuário
- `PATCH /api/tasks/:id` — Alternar status da tarefa

### Usuários

- `PUT /api/users/me` — Atualizar sua senha
- `GET /api/users` — Listar todos os usuários (**admin**)
- `DELETE /api/users/:id` — Deletar usuário (**admin**)

---

## 🔒 Testando com token

1. Faça login com `POST /api/auth/login`
2. Copie o token da resposta
3. Use em rotas protegidas no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## 🧠 Autor

Desenvolvido por Luciano Giraldi — com orientação técnica no uso de Express, JWT, MongoDB e estrutura MVC.