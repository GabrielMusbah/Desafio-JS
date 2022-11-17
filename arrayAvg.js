//Faça uma função chamada arrayAvg que recebe um parâmetro chamado list do tipo array e retorna um number que é a média de todos os números do array, outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function arrayAvg(list)
{
    //reutilizei a função de soma de array
    var soma = arraySum(list);
    //criei uma var com o tamanho da lista
    var tamanho = list.length;
    //retornei o resultado da funcao simples de media(avg) = soma/qt
    return soma / tamanho;
}