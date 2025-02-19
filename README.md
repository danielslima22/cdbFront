# CdbFront

## - FrontEnd - Angular. 

## Pré-requisitos

- Node.js (versão 12 ou superior)
- Angular CLI (versão 10 ou superior)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/danielslima22/cdbFront.git
   cd cdbFront

2. Instale as dependências:

bash
npm install

## Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

bash
ng serve
O projeto estará disponível em http://localhost:4200/.

## Executando os Testes

Para executar os testes unitários, use o comando:

bash
ng test

Para executar os testes de ponta a ponta (e2e), use o comando:

bash
ng e2e

## Estrutura do Projeto

src/app: Contém os componentes e serviços do projeto.

components: Contém os componentes do projeto.
investment-form: Componente do formulário de simulação de CDB.
investment-result: Componente para exibir o resultado da simulação de CDB.
services: Contém os serviços do projeto.
cdb.service.ts: Serviço responsável por calcular os valores de CDB.

Tecnologias Utilizadas
Angular
Angular Material
RxJS
