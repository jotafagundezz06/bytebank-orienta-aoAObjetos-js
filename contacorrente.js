import { Cliente } from "./cliente.js"; 
// Importa a classe 'Cliente' do arquivo 'cliente.js'

export class ContaCorrente {
    // Declaração da propriedade estática 'numeroDeContas' e inicialização com 0
    static numeroDeContas = 0; 
    
    // Declaração das propriedades da classe ContaCorrente
    agencia; // Propriedade pública que armazena o número da agência
    _cliente; // Propriedade privada que armazenará o cliente associado à conta
    _saldo = 0; // Propriedade privada que armazenará o saldo da conta, inicializada com 0

    // Método setter para a propriedade '_cliente'
    set cliente(novoValor) {
        // Verifica se o novo valor é uma instância da classe 'Cliente'
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor; // Atribui o cliente à propriedade '_cliente'
        }
    }

    // Método getter para a propriedade '_cliente'
    get cliente() {
        return this._cliente; // Retorna o cliente associado à conta
    }

    // Método getter para a propriedade '_saldo'
    get saldo() {
        return this._saldo; // Retorna o saldo da conta
    }

    // Construtor da classe ContaCorrente
    constructor(agencia, cliente) {
        this.agencia = agencia; // Atribui o número da agência à propriedade 'agencia'
        this.cliente = cliente; // Atribui o cliente à propriedade '_cliente' usando o setter
        ContaCorrente.numeroDeContas += 1; // Incrementa o número total de contas criadas
    }

    // Método para sacar um valor da conta
    sacar(valor) {
        // Verifica se há saldo suficiente para o saque
        if (this._saldo >= valor) {
            this._saldo -= valor; // Subtrai o valor sacado do saldo
            return valor; // Retorna o valor sacado
        }
    }

    // Método para depositar um valor na conta
    depositar(valor) {
        // Verifica se o valor a ser depositado é positivo
        if (valor <= 0) {
            return; // Se o valor for negativo ou zero, a operação é cancelada
        }
        this._saldo += valor; // Adiciona o valor depositado ao saldo
    }

    // Método para transferir um valor para outra conta
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor); // Saca o valor da conta corrente
        conta.depositar(valorSacado); // Deposita o valor sacado na conta de destino
    }
}
