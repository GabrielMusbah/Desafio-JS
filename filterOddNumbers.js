//Faça uma função chamada filterOddNumbers que recebe um parâmetro chamado list do tipo array e 
//retorna um array apenas com os números ímpares do parâmetro list, 
//outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function filterOddNumbers(list)
{
    return list.filter(num => typeof num === 'number' && num %2 !== 0);
}
