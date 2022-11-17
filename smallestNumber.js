//Faça uma função chamada smallestNumber que recebe dois parâmetros chamados val1 e val2 do tipo number e retorna um number que é o parâmetro de menor valor

function smallestNumber(val1, val2)
{
    //compara os 2 valores com > e <, pra saber qual é maior e devolve se ambos foram iguais
    if (val1 < val2){
        return val1;
    } else if (val1 > val2){
        return val2;
    } else {
        return 'numeros iguais!'
    }
}