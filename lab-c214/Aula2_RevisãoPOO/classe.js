//Var: Podem ser criadas e declaradas dentro do escopo da programação (Não Usar)
//Let: Podem ser atualizadas mas não podem ser declaradas novamente
//Const: Não podem atualizadas e nem declaradas novamente

class Veiculo {
    tipo;
    marca;

    settipo(novoTipo){
        this.tipo = novoTipo;
    }

    setMarca(novaMarca){
        this.marca = novaMarca;
    }

    showInfo(){
        console.log("Marca: ", this.marca);
        console.log("Tipo: ", this.tipo);
    }
}

let veiculo = new Veiculo();

veiculo.settipo('caminhão');
veiculo.setMarca('Mercedes-Benz');
veiculo.showInfo();