import { Cliente } from "./cliente.js"; // Importa a classe Cliente do arquivo 'cliente.js'
import { ContaCorrente } from "./contacorrente.js"; // Importa a classe ContaCorrente do arquivo 'contacorrente.js'

// Criação de uma instância da classe Cliente para 'cliente1'
const cliente1 = new Cliente("Ricardo", 11122233309); 
// Cria um novo objeto 'Cliente' chamado 'cliente1' com nome "Ricardo" e CPF 11122233309

// Criação de uma instância da classe Cliente para 'cliente2'
const cliente2 = new Cliente("Alice", 88822233309); 
// Cria um novo objeto 'Cliente' chamado 'cliente2' com nome "Alice" e CPF 88822233309

// Criação de uma instância da classe ContaCorrente para 'contaCorrenteRicardo'
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1); 
// Cria um novo objeto 'ContaCorrente' associado a 'cliente1', com a agência 1001

contaCorrenteRicardo.depositar(500); 
// Chama o método 'depositar' para adicionar R$500 ao saldo de 'contaCorrenteRicardo'

const conta2 = new ContaCorrente(1002, cliente2); 
// Cria um novo objeto 'ContaCorrente' associado a 'cliente2', com a agência 1002

console.log(conta2); 
// Exibe o objeto 'conta2', mostrando seus detalhes, como a agência, cliente associado e saldo

let valor = 200; 
// Declara a variável 'valor' e atribui a ela o valor 200

contaCorrenteRicardo.transferir(valor, conta2); 
// Chama o método 'transferir' para transferir R$200 de 'contaCorrenteRicardo' para 'conta2'

console.log(contaCorrenteRicardo); 
// Exibe o estado atual do objeto 'contaCorrenteRicardo', incluindo o saldo restante após a transferência

console.log(ContaCorrente.numeroDeContas); 
// Exibe o número total de contas correntes criadas, acessando a propriedade estática 'numeroDeContas' da classe 'ContaCorrente'
