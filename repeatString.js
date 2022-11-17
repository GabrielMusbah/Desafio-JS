//Faça uma função chamada repeatString que recebe um parâmetro chamado text do tipo string e uma 
//chamada n do tipo number e retorna uma string que é o parâmetro text repetido n vezes

function repeatString(val1, val2)
{
    //comeca com um text vazio
    var text = "";
    //loop que repete quantas vezes for passada no val2
    for (let i = 0; i < val2; i++){
        //o text fica recebendo o texto n vezes e concatena tudo numa var so
        text += val1;
    }

    return text;
}
