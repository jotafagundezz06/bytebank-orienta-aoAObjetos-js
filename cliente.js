export class Cliente {
    // Declaração das propriedades da classe Cliente
    nome; // Propriedade pública 'nome'
    _cpf; // Propriedade privada '_cpf' (usando convenção de nomenclatura)

    get cpf() {
        // Getter para acessar o valor de '_cpf'
        return this._cpf;
    }

    constructor(nome, cpf) {
        // Construtor que inicializa as propriedades 'nome' e '_cpf'
        this.nome = nome; // Atribui o valor passado para 'nome' à propriedade 'nome'
        this._cpf = cpf; // Atribui o valor passado para 'cpf' à propriedade '_cpf'
    }
}
