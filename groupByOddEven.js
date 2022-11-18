//Faça uma função chamada groupByOddEven que recebe um parâmetro chamado list do tipo array e 
//retorna um object com duas chaves, uma chamada odd contendo um array com os números ímpares e 
//outra chave chamada even com os números pares, outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function groupByOddEven(list)
{
    //filtro que separa apenas os numeros
    var filtro = list.filter(num => typeof num === 'number');

    //filtros que separam os numeros impares e pares em 2 variaveis
    var par = filtro.filter(num => num % 2 == 0);
    var impar = filtro.filter(num => num % 2 !== 0);

    //retorno um objeto com as 2 arrays criadas pelos filtros
    return {odd: impar, even: par};
}
