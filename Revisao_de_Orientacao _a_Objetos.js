//Var: Podem ser criadas e declaradas dentro do escopo da programação (Não Usar)
//Let: Podem ser atualizadas mas não podem ser declaradas novamente
//Const: Não podem atualizadas e nem declaradas novamente

const { get } = require("cypress/types/lodash");

class Veiculo {
    placa = String;
    ano = int;

    setPlaca(novaPlaca){
        this.placa = novaPlaca;
    }

    setAno(novoAno){
        this.ano = novoAno;
    }

    showInfo(){
        console.log("Placa: ", this.placa);
        console.log("Ano: ", this.ano);
    }
}

class Caminhao extends Veiculo{
    
        eixos = int;

        constructor(placa, ano, eixos){
            super(placa, ano);
            this.eixos = eixos;
        }
    
        setEixos(novoEixo){
            this.eixos = novoEixo;
        }

        get Eixos(){
                return this.eixos;
        }

        exibirDados(){
           console.log(`Caminhão: 
                        Placa: ${this.placa} 
                        Fabricação: ${this.ano}
                        Eixos: ${this.Eixos} `);
        }
}
class Onibus extends Veiculo{
    
    assentos = int;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    setAssentos(novoAssento){
        this.assentos = novoAssento;
    }

    get Assentos(){
            return this.assentos;
    }

    exibirDados(){
       console.log(`Onibus: 
                    Placa: ${this.placa} 
                    Fabricação: ${this.ano}
                    Assentos: ${this.Assentos} `);
    }
}



let veiculo = new Veiculo();

veiculo.setAno('2000');
veiculo.setPlaca('NIK2222');
veiculo.setEixos(8)
veiculo.exibirDados();

veiculo.setAno('2006');
veiculo.setPlaca('BOL5022');
veiculo.setAssentos(22);
veiculo.exibirDados();