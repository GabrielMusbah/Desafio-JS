//Faça uma função chamada biggestNumber que recebe dois parâmetros chamados val1 e val2 do tipo number e retorna um number que é o parâmetro de maior valor

function biggestNumber(val1, val2)
{
    //usa > < pra ver qual os 2 valores é maior e se forem iguais isso é retornado tambem
    if (val1 > val2){
        return val1;
    } else if (val1 < val2){
        return val2;
    } else {
        return 'numeros iguais!'
    }
}