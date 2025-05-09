const Pessoa = require('./Pessoa.test');
const niveis = require('./tabelaNiveis.json'); // Importa o JSON

class Doador extends Pessoa {
    constructor(nome, cpf, dtNasc, endereco, telefone, email, pontosCompra = 0) {
        super(nome, cpf, dtNasc, endereco, telefone, email, "Doador");
        this.pontosCompra = pontosCompra;
    }

    getPontosCompra() {
        return this.pontosCompra;
    }

    getNivel() {
        // Ordena por minPontos decrescente e encontra o maior que se aplica
        for (const n of niveis.sort((a, b) => b.minPontos - a.minPontos)) {
            if (this.pontosCompra >= n.minPontos) return n.nivel;
        }
        return 0;
    }

    getDesconto() {
        const nivelAtual = this.getNivel();
        const infoNivel = niveis.find(n => n.nivel === nivelAtual);
        return infoNivel ? infoNivel.desconto : 0.0;
    }

    setPontosCompra(pontos = 1) {
        if (pontos > 0) {
            this.pontosCompra += pontos;
        } else {
            console.log("Pontos não podem ser negativos.");
        }
    }

    retornaDados() {
        return {
            ...super.retornaDados(),
            tipo: this.tipoPessoa,
            pontosCompra: this.pontosCompra,
            nivel: this.getNivel(),
            desconto: `R$${this.getDesconto().toFixed(2)}`
        };
    }
}

module.exports = Doador;
