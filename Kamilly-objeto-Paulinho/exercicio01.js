class Conta {
    constructor(numeroAgencia, numeroConta, saldo){
    this.numeroAgencia = numeroAgencia
    this.numeroConta = numeroConta
    this.saldo = saldo
    }

    Sacar(valor){
        this.saldo = this.saldo - valor 
    }

    Depositar(valor){
        this.saldo = this.saldo + valor 
    }


    getSaldo(){
        return this.saldo
    }

}

let mConta = new Conta (36712, 333980, 1238.90)

mConta.Sacar(238)
mConta.Depositar(50)
console.log(mConta)
//console.log(mConta.getSaldo)

