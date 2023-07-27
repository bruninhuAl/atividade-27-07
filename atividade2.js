class Matriculados {
    constructor (matricula, nome, nota_prova1, nota_prova2, nota_trabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota_prova1 = nota_prova1;
        this.nota_prova2 = nota_prova2;
        this.nota_trabalho = nota_trabalho;
    }

    media_prova(){
      const mediaProvas = (this.nota_prova1 + this.nota_prova2) * 2.5 / 2;
      const mediaTrabalho = this.nota_trabalho * 2;
      const mediaFinal = (mediaProvas + mediaTrabalho) / 4.5;
      return mediaFinal;
    }

    media_final() {
        const mediaFinal = this.media();
        if (mediaFinal < 6) {
          const notaProvaFinal = (6 - mediaFinal) * 4.5;
          return notaProvaFinal;
        } else {
          return 0;
        }
      }
}


const matriculado = new Matriculados(123456, "João da Silva", 7.5, 6.0, 8.0);
console.log("Média Final:", matriculado.media().toFixed(2));
console.log("Nota necessária na prova final:", matriculado.final().toFixed(2));