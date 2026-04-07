class Pessoa {


    constructor(nome, cpf, idade) {
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

    imprimir() {
        alert("Nome: " + this.nome +
                    "\nCPF: " + this.cpf +
                    "\nIdade: " + this.idade)
    }
}


const p = new Pessoa("Bruno", 25525, 25)
p.imprimir()





