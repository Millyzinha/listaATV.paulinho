class Cliente {
    constructor(nome, emaill, whatsapp, twitter){
        this.nome = nome
        this.emaill = emaill
        this.whatsapp = whatsapp
        this.twitter = twitter
    }

    toString(){
        return "Nome:" + this.nome + "Emaill:" +  this.emaill + ", Whatsapp:" + this.whatsapp + ", Twitter:" + this.twitter
    }

}

let Cliente01 = new Cliente ("Marcy", "Marcynha@gmail.com", "51996546387", "@MarcyelenC")
let Cliente02 = new Cliente ("Raí", "Raízinho@gmail.com", "48984259874", "@MonoDryad")
let Cliente03 = new Cliente ("Pedro", "Pedrinho@gmail.com", "21958477448", "@Pedroca")
let Cliente04 = new Cliente ("Grazy", "Grazynha@gmail.com", "51984135505", "@Grazynha")
let Cliente05 = new Cliente ("Yan", "Yanzinho@gmail.com", "51996365665", "@YanSilver")
let Cliente06 = new Cliente ("Diego", "Diego@gmail.com", "48984360597", "@Dieguinho")
let Cliente07 = new Cliente ("Erika", "Erika@gmail.com", "87966325415", "@Erikkka")
let Cliente08 = new Cliente ("Lucca", "Lucca@gmail.com", "51945587841", "@Luccaantonio")
let Cliente09 = new Cliente ("Bernardo", "Bernardo@gmail.com", "51978879556", "@Bebezinho")
let Cliente10 = new Cliente ("Jessica", "Jessica@gmail.com", "51958874112", "@Jessiquinha")

console.log(Cliente01, Cliente02, Cliente03, Cliente04, Cliente05 )
console.log(Cliente01.toString(), Cliente02.toString(), Cliente03.toString(), Cliente04.toString(), Cliente05.toString())
