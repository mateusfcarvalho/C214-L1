class Pai {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    introduzir(){
        // console.log('Olá, meu nome é', this.nome, 'e tenho', this.idade, 'anos')
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const novaPai = new Pai('Luiz', 52);

novaPai.introduzir();

// class Filho extends Pai{
//     profissao;

//     constructor(nome, idade, profissao){
//         super(nome, idade);
//         this.profissao = profissao;
//     }

//     introduzir(){
//         console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e minha profissão é ${this.profissao}`);
//     }
// }

// const filho = new Filho('Jaun', 26, 'Engenheiro de Software');
// filho.introduzir();