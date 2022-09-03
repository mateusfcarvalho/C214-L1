function Jogo(){
    let nome;
    let devs = [];
    let genero = [];

    this.setarNome = SetNome;
    this.setarGenero = SetGenero;
    this.setarDevs = SetDevs;
    this.verInfo = showInfo;

    function SetNome(novoNome){
        nome = novoNome;
    }

    function SetGenero(novoGenero){
        genero.push(novoGenero);
    }

    function SetDevs(novoDevs){
        devs.push(novoDevs);
    }

    function showInfo(){
        console.log('Nome: ', nome);
        console.log('Desenvolvedores: ', devs);
        console.log('Gêneros: ', genero);
    }
}

let jogo = new Jogo();
jogo.setarNome("Tom Clancy's Rainbow Six Siege");
jogo.setarDevs('Ubisoft');
jogo.setarDevs('Ubisoft Montreal');
jogo.setarGenero('Tiro');
jogo.setarGenero('Tático');
jogo.verInfo();