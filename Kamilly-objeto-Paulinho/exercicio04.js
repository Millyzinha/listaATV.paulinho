class Conta{
    #numeroAgencia 
    #numeroConta
    #saldo
    constructor(numeroAgencia, numeroConta, saldo){
    this.#numeroAgencia = numeroAgencia 
    this.#numeroConta = numeroConta
    this.#saldo = saldo
}

get numeroAgencia(){
    return this.#numeroAgencia
}

set numeroAgencia(numeroAgencia){
    this.#numeroAgencia = numeroAgencia
}

get numeroConta(){
    return this.#numeroConta
}

set numeroConta(numeroConta){
    this.#numeroConta = numeroConta
}

get saldo(){
    return this.#saldo
}

Sacar(valor){
    if(valor > 0 && valor <= this.#saldo){
        this.#saldo -= valor 
    }
}

Depositar(valor){
  if (valor >0){
      this.#saldo =+ valor 
  }
}

toString(){
    return "numero Agencia:" + this.numeroAgencia + ", numero Conta:" + this.#numeroConta + ",saldo:" + this.saldo}
    }

let mConta = new Conta (36712, 333980, 1238.90)

mConta.Sacar(238)
mConta.Depositar(50)
console.log(mConta.toString)



