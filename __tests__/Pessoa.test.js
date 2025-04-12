class Pessoa {
    constructor(nome, cpf, dtNasc, endereco, telefone, email, tipoPessoa="Cliente") {
        this.id = null;
        this._nome = nome;
        this._cpf = cpf;
        this._dtNasc = dtNasc;
        this._endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.pontos = 0;
        this.tipoPessoa = tipoPessoa; // Cliente, Lojista, Doador, Adotante, 
        //this.nivel = 0;

    }

    getNome() { return`O nome é ${this._nome}`};
    
    getCPF(){return `o CPF é ${this._cpf}`}
    getIdade() {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const anoNascimento = new Date(this._dtNasc).getFullYear();
        return anoAtual - anoNascimento;
    }
    
    getEndereco() {
        return this._endereco;
    }
    
    getTelefone() {
        return this.telefone;
    }   
    
    getEmail() {   
        return this.email;
    }
    getPontos() {
        return this.pontos;
    }

    ReturnNivel() {
        return Math.floor(this.pontos / 100) + 1;
    }
    setPontos(pontos=1) {
        if(pontos > 0) {
            this.pontos += pontos;
        }
        else { console.log("Pontos não podem ser negativos."); }
        
    }
    
    getNivel() {
        return Math.floor(this.pontos / 100) + 1;
    }
    
    
    setEmail (email) {
        this.email = email;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    setEndereco(endereco) {
        this._endereco = endereco;
    }

    setNome(nome) {
        this._nome = nome;
    }

    retornaDados() {
        return {
            nome: this._nome,
            cpf: this._cpf,
            dtNasc: this._dtNasc,
            endereco: this._endereco,
            telefone: this.telefone,
            email: this.email,
            pontos: this.pontos,
            nivel: this.getNivel()
        };
    }
}


module.exports = Pessoa;

let daniel = new Pessoa("Daniel", "123.456.789-00", "1993-01-21", "Rua Exemplo", "(11) 99999-9999", "daniel@email.com");
console.log(daniel.getNome());
console.log(daniel.getIdade());

console.log(daniel.retornaDados());
daniel.setPontos(50);
console.log(daniel.getPontos());
console.log(daniel.getNivel());
daniel.setPontos(150);
console.log(daniel.retornaDados());
