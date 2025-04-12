const Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
    constructor(nome, cpf, dtNasc, endereco, telefone, email, pontosCompra=0, nivel=0) {
        super(nome, cpf, dtNasc, endereco, telefone, email, "Cliente");
        this.pontosCompra = pontosCompra;
        this.nivel = this.getNivel();
    }

    getPontosCompra() {
        return this.pontosCompra;
    }

    getNivel() {
        if ( this.pontosCompra < 50) { return 0; }
        else if ( this.pontosCompra < 100) { return 1; }
        else if ( this.pontosCompra >= 100 ){ return 2; }
        else if ( his.pontosCompra >= 200 ){ return 3; }
        else{ return 4; }

        }

    setPontosCompra(pontosCompra=1) {
        if(pontosCompra > 0) {
            this.pontosCompra += pontosCompra;
        }
        else { console.log("Pontos não podem ser negativos."); }
    }

    retornaDados() {
        return {
            nome: this._nome,
            cpf: this._cpf,
            dtNasc: this._dtNasc,
            endereco: this._endereco,
            telefone: this.telefone,
            email: this.email,
            pontosCompra: this.pontosCompra,
            nivel: this.getNivel()
        };
    }
}


// Teste da classe Cliente
module.exports = Cliente;
