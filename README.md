# 🧪 Projeto de Testes Automatizados — Central de Atendimento ao Cliente TAT

Este projeto contém uma suíte de testes automatizados desenvolvida com **Cypress**, focada na aplicação *Central de Atendimento ao Cliente TAT*. Os testes cobrem funcionalidades como envio de formulários, validações de campos obrigatórios, seleção de produtos, uploads de arquivos e navegação entre páginas.

---

## ✅ Pré-requisitos

Para executar este projeto, é necessário ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node)
- [Git](https://git-scm.com/)
- Um editor como [VS Code](https://code.visualstudio.com/) (opcional, mas recomendado)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

3. Instale as dependências do projeto:

```bash
npm install
```

---

## 🚀 Executando os testes

### Via Test Runner (modo interativo):

```bash
npx cypress open
```

Depois selecione o arquivo `CAC-TAT.cy.js` na interface do Cypress.

### Via linha de comando (modo headless):

```bash
npx cypress run --spec "cypress/e2e/CAC-TAT.cy.js"
```

---

## 📂 Estrutura de testes cobertos

- ✅ Verificação de título da página
- ✅ Preenchimento e envio do formulário
- ✅ Validação de campos obrigatórios
- ✅ Erros ao preencher campos incorretamente (ex: e-mail ou telefone inválido)
- ✅ Seleção de opções via dropdown (por texto, valor e índice)
- ✅ Seleção de radio buttons e checkboxes
- ✅ Upload de arquivos por seleção ou drag-and-drop
- ✅ Navegação e testes de links externos
- ✅ Testes da página de Política de Privacidade

---

## 🛠 Comandos customizados usados

O projeto utiliza comandos customizados definidos no Cypress, como:

- `cy.fillMandatoryFields()`
- `cy.fillMandatoryFieldsAndSubmit()`

Esses comandos encapsulam ações repetitivas, tornando os testes mais limpos e reutilizáveis.

---

## 📎 Observações

- O arquivo de teste utiliza o caminho relativo `./src/index.html`, portanto o projeto precisa ter a estrutura correta localmente para funcionar.
- O Cypress utiliza arquivos dentro de `cypress/fixtures/` para simular uploads.

---

## 🧑‍💻 Autor(a) dos testes

Marina Larissa Carpes Röhrig