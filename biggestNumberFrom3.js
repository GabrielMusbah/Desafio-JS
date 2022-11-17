//Faça uma função chamada biggestNumberFrom3 que recebe três parâmetros chamados val1, val2 e val3 do tipo number e retorna um number que é o parâmetro de maior valor

function biggestNumberFrom3(val1, val2, val3)
{
    // usando > < e o operador && (and) conseguimos qual numero seria o maior entre os 3 e retorna, se os 3 valores forem iguais isso é devolvido ao usuario
    if (val1 > val2 && val1 > val3){
        return val1;
    } else if (val2 > val1 && val2 > val3){
        return val2;
    } else if (val3 > val1 && val3 > val2){
        return val3;
    } else {
        return 'Numeros iguais!'
    }
}