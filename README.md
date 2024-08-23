# Projeto: Simulação de Conta Corrente

Este projeto é uma simulação simples de uma aplicação bancária básica, desenvolvida como parte do curso de Orientação a Objetos da Alura. O objetivo principal é demonstrar o uso de conceitos fundamentais da Programação Orientada a Objetos (POO) em JavaScript, como classes, encapsulamento, getters e setters, e manipulação de dados de forma segura.

## Funcionalidades

O código simula o funcionamento de uma conta corrente em um banco e inclui as seguintes funcionalidades:

1. **Criação de Clientes e Contas Correntes**:
   - É possível criar novos clientes com um nome e CPF.
   - Cada cliente pode ter uma conta corrente associada a uma agência específica.

2. **Operações Bancárias**:
   - **Depósito**: Adicionar um valor ao saldo da conta corrente.
   - **Saque**: Subtrair um valor do saldo, desde que o saldo seja suficiente.
   - **Transferência**: Transferir um valor de uma conta corrente para outra, com base no saldo disponível.

3. **Encapsulamento**:
   - Os dados sensíveis, como o saldo da conta, são protegidos por meio de propriedades privadas e métodos de acesso controlado.

## Estrutura do Código

O projeto está dividido em dois principais arquivos de código:

1. **cliente.js**:
   - Define a classe `Cliente`, que armazena informações sobre o cliente, como nome e CPF.
   - O CPF é encapsulado e só pode ser acessado por meio de um getter.

2. **contacorrente.js**:
   - Define a classe `Contacorrente`, que armazena informações sobre a conta, como agência, cliente associado, e saldo.
   - Inclui métodos para realizar operações como depósito, saque e transferência.

## Como Executar

Para executar o código, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para sua máquina local.
3. Navegue até o diretório do projeto.
4. Execute o arquivo principal utilizando Node.js:

```bash
node app.js
