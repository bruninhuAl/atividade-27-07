class Pessoa {
    constructor (nome, data_de_nascimento, altura){
      this.nome = nome;
      this.data_de_nascimento = data_de_nascimento;
      this.altura = altura;
    }

    imprimir_dados(){
        return this.nome + this.data_de_nascimento + this.altura
    }

    idade(){
        return 2023 - this.data_de_nascimento.split("/")[2];
    }
    
}

const pessoa = new Pessoa("Bruno", "13/06/2007", "1.67");
console.log(pessoa.idade())