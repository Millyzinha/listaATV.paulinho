class Aluno {
    constructor(nome, nota1, nota2, nota3){
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3

    }


calcularMedia(){
        this.media = (this.nota1 + this.nota2 + this.nota3)/3
}

    }

let nota = new Aluno("Marcyelen", 5.5, 9, 10)
nota.calcularMedia()
console.log(nota)

//nota.nota1 = 5
//nota.calcularMedia
//console.log(nota)