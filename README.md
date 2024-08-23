Projeto: Simulação de Conta Corrente
Este projeto é uma simulação simples de uma aplicação bancária básica, desenvolvida como parte do curso de Orientação a Objetos da Alura. O objetivo principal é demonstrar o uso de conceitos fundamentais da Programação Orientada a Objetos (POO) em JavaScript, como classes, encapsulamento, getters e setters, e manipulação de dados de forma segura.

Funcionalidades
O código simula o funcionamento de uma conta corrente em um banco e inclui as seguintes funcionalidades:

Criação de Clientes e Contas Correntes:

É possível criar novos clientes com um nome e CPF.
Cada cliente pode ter uma conta corrente associada a uma agência específica.
Operações Bancárias:

Depósito: Adicionar um valor ao saldo da conta corrente.
Saque: Subtrair um valor do saldo, desde que o saldo seja suficiente.
Transferência: Transferir um valor de uma conta corrente para outra, com base no saldo disponível.
Encapsulamento:

Os dados sensíveis, como o saldo da conta, são protegidos por meio de propriedades privadas e métodos de acesso controlado.
Estrutura do Código
O projeto está dividido em dois principais arquivos de código:

cliente.js:

Define a classe Cliente, que armazena informações sobre o cliente, como nome e CPF.
O CPF é encapsulado e só pode ser acessado por meio de um getter.
contacorrente.js:

Define a classe Contacorrente, que armazena informações sobre a conta, como agência, cliente associado, e saldo.
Inclui métodos para realizar operações como depósito, saque e transferência.
Como Executar
Para executar o código, siga os passos abaixo:

Certifique-se de ter o Node.js instalado em sua máquina.
Clone este repositório para sua máquina local.
Navegue até o diretório do projeto.
Execute o arquivo principal utilizando Node.js:
bash
Copiar código
node app.js
Ao executar o código, você verá o saldo da conta corrente no console, após realizar um depósito.

Sobre o Curso
Este projeto foi desenvolvido como parte do curso de "Orientação a Objetos com JavaScript" oferecido pela Alura. O curso é voltado para estudantes que desejam aprender a aplicar conceitos de POO em JavaScript e desenvolver uma base sólida para construir sistemas mais complexos e organizados.

Melhorias Futuras
Tratamento de Erros: Adicionar mensagens de erro claras e tratamento de exceções para operações inválidas.
Teste Unitário: Implementar testes automatizados para garantir que todas as funcionalidades operam corretamente.
Interface de Usuário: Adicionar uma interface gráfica para interagir com as contas e realizar operações bancárias de maneira mais intuitiva.
Conclusão
Este projeto é uma implementação simples mas eficaz para praticar conceitos de orientação a objetos em JavaScript. Com mais refinamento e funcionalidades adicionais, ele pode servir como base para aplicações bancárias mais complexas.
