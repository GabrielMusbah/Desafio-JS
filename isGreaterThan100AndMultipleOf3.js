//Faça uma função chamada isGreaterThan100AndMultipleOf3 que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o numero é maior que 100 e também é um múltiplo de 3

function isGreaterThan100AndMultipleOf3(val)
{
    //usando > e =, com uso de && para definir que ambas validacoes devem ter resultado true
    if (val > 100 && val % 3 == 0){
        return true;
    } else {
        return false;
    }
}