# 🥋 Plataforma de Campeonatos de Luta

Sistema web para organização de campeonatos de luta, com cadastro de atletas, inscrições e gestão por administradores.

## 🚀 Funcionalidades
- Cadastro de usuário (atleta ou administrador)
- Inscrição em campeonatos
- Criação e gestão de campeonatos (admin)
- Geração automática de chaves e lutas (admin)

---

## 🧪 Qualidade de Software e Testes

### ✅ Aplicações reais de qualidade

- **Linting com ESLint** 
- **Testes automatizados E2E com Cypress**
- **CI automatizado com GitHub Actions para rodar testes E2E**


## 📂 Estrutura dos Testes

```plaintext
/frontend
└── cypress
    ├── e2e
    │   └── cadastro.cy.js
    │   └── home.cy.js
    ├── support
    └── fixtures


## 🔁 Fluxo de Pull Requests

Nosso grupo segue um fluxo padronizado de contribuição via Pull Requests (PRs), com os seguintes passos:

1. Crie uma branch nomeada por funcionalidade, exemplo: `feature/inscricao-campeonato`
2. Realize os commits com mensagens descritivas
3. Abra uma PR para a branch `main`
4. Preencha o **template de PR**, marcando o checklist
5. Solicite revisão de pelo menos **um membro do grupo**
6. Revise o código de outros membros, comentando sugestões ou problemas encontrados
7. Aplique as correções sugeridas (se houver)
8. Após aprovação, a PR pode ser **mesclada** na `main`

### ✍️ Nomeclatura de branches

- `feature/` – novas funcionalidades
- `fix/` – correções
- `hotfix/` – correções urgentes na `main`
- `refactor/` – melhorias sem mudança de funcionalidade

## 🧪 Como rodar os testes E2E com Cypress

1. Instale as dependências do projeto (caso ainda não tenha feito):

   ```bash
   npm install
   ```

2. Para abrir a interface gráfica do Cypress e rodar os testes:

   ```bash
   npx cypress open
   ```

   Isso abrirá o painel do Cypress, onde você pode escolher e executar os testes manualmente.

---

> **Dica:** Certifique-se de que o servidor da aplicação está rodando antes de executar os testes.