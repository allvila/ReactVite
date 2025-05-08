# ReactVite
# Cadastro e Listagem de Usuários (Frontend React)

Este é um componente React simples que demonstra como realizar operações básicas de CRUD (Create, Read, Delete) consumindo uma API backend. Ele permite visualizar uma lista de usuários, adicionar novos usuários através de um formulário e deletar usuários existentes.

## Funcionalidades

* Listar todos os usuários existentes.
* Formulário para cadastrar um novo usuário (Nome, Idade, Email).
* Deletar um usuário individualmente.

## Pré-requisitos

Antes de utilizar este componente, certifique-se de ter:

* Node.js e npm (ou yarn) instalados.
* Um projeto React configurado.
* Um backend rodando que forneça os endpoints da API necessários para `usuarios`.
* O arquivo `../../services/api.js` configurado corretamente para apontar para o seu backend.
* O arquivo CSS (`./style.css`) para estilização (conforme seu código).
* O ícone de lixeira (`../../assets/trash.svg`) no caminho especificado.

## Instalação e Configuração

1.  Certifique-se de que você tem um projeto React configurado.
2.  Adicione este arquivo de componente (`Home.js`) ao seu projeto (por exemplo, em `src/components/Home/Home.js` ou `src/pages/Home/Home.js`).
3.  Certifique-se de que os arquivos CSS (`style.css`) e o ícone (`Trash.svg`) estão nos caminhos relativos corretos ou ajuste os imports.
4.  Verifique se o arquivo de configuração da API (`../../services/api.js`) existe e está apontando para a URL base correta do seu backend. Se você usa `axios`, instale-o:

    ```bash
    npm install axios
    # ou
    yarn add axios
    ```
5.  Use o componente `<Home />` em alguma parte da sua aplicação React, como em uma rota:

    ```jsx
    import Home from './caminho/para/Home'; // Ajuste o caminho
    // ...
    function App() {
      return (
        <div>
          {/* Outros componentes/rotas */}
          <Home />
          {/* Outros componentes/rotas */}
        </div>
      );
    }
    // ...
    ```

## Endpoints da API Utilizados

Este componente interage com seu backend utilizando os seguintes endpoints (assumindo o path `/usuarios`):

* `GET /usuarios`: Para obter a lista de todos os usuários.
* `POST /usuarios`: Para cadastrar um novo usuário (envia o objeto do usuário no corpo da requisição).
* `DELETE /usuarios/:id`: Para deletar um usuário específico, onde `:id` é o ID do usuário a ser removido.

## Uso

1.  Inicie sua aplicação React:

    ```bash
    npm start
    # ou
    yarn start start
    ```
2.  Navegue para a página ou rota onde o componente `Home` está sendo renderizado.
3.  Você verá a lista de usuários existentes (se houver) e um formulário para adicionar novos usuários.
4.  Use o formulário para preencher os dados e clique em "CADASTRAR" para adicionar um novo usuário.
5.  Clique no ícone de lixeira ao lado de cada usuário para deletá-lo.

## Estrutura de Arquivos Relacionados (Baseado no código)
