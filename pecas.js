var listadePecas = ("motor", "amortecedor", "freio", "cambio","disco de freio", "radiador")

if (listadePecas.length < 10){
    console.log ("É possível cadastrar mais peças")
}else{
    console.log("não tem mais espaço na lista")
}

let peso = 50

if(peso < 100){
    console.log("A peça deve pesar no mínimo 100gr")
}else{
    console.log("A peça possui peso adequado")
}

let nomePeca = "Disco de Freio"

if(nomePeca.length > 3){
    console.log("nome de peça está adequado para o trabalho")
}else if(nomePeca.length == 0){
    console.log(" O Nome de peça não pode ser vazio")
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")

}
switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
    
    break;

    case 1 :
    case 2 :
    case 3 :
        console.log("O nome deveter mais de 3 caracteres, digite um nome adequado")
        break;

    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}
