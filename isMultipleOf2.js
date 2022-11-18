//Faça uma função chamada isMultipleOf2 que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o número é um multiplo de 2

function isMultipleOf2(val)
{
    //usando o resto %, verifico se val / 2 tem resto, se nao tiver é multiplo
    return (val % 2 == 0);
}
