//Faça uma função chamada isMultipleOf5 que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o número é um múltiplo de 5

function isMultipleOf5(val)
{
    //usando o resto %, verifico se val / 5 tem resto, se nao tiver é multiplo
    if (val % 5 == 0){
        return true;
    } else {
        return false;
    }
}