class Cachorro {
    constructor(nome, anoNasc=new Date().getFullYear(), tamanho=Medium,  cor="Sem Cor", peso=0.0) {
        this.id = null;
        this._nome = nome;
        this.anoNasc = anoNasc;
        this._tamanho = tamanho;
        this._cor = cor;
        this._peso = peso;
    }
    getNome() { return `O nome é ${this._nome}`};

    getIdade() {
        return new Date().getFullYear() - this.anoNasc;
    }
    getTamanho() {
        return this._tamanho;
    }
    getCor() {
        return this._cor;
    }
    getPeso() {
        return this._peso;
    }

    setNome(nome) {
        this._nome = nome;
    }
    setCor(cor) {
        this._cor = cor;
    }  
    setPeso(peso) {
        this._peso = peso;
    }
    setTamanho(tamanho) {
        if( tamanho > 0 ) {this._tamanho = tamanho}
        else { console.log("Tamanho não pode ser negativo."); }
    }
    setAnoNasc(anoNasc) {
        this.anoNasc = anoNasc;
    }
}

module.exports = Cachorro;
