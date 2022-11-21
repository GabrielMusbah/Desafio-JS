//Faça uma função chamada isGreaterThan100AndMultipleOf3 que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o numero é maior que 100 e também é um múltiplo de 3

export function isGreaterThan100AndMultipleOf3(val)
{
    //usando > e =, com uso de && para definir que ambas validacoes devem ter resultado true
    return (val > 100 && val % 3 == 0);
}