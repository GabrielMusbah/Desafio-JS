//Faça uma função chamada isBetween10and20 que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o número é maior que 10 e menor que 20

function isBetween10and20(val)
{
    //usando 2 funçoes como validacao ele so funciona se ambas darem true
    if (isGreaterThan10(val) && isLowerThan20(val)){
        return true;
    } else {
        return false;
    }
}