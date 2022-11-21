//Faça uma função chamada arraySum que recebe um parâmetro chamado list do tipo array e 
//retorna um number que é a soma de todos os números do array, 
//outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

export function arraySum(list)
{
    //filtra oque não for numerico
    var filtro = list.filter(num => typeof num === 'number');
    //retorna a soma dos valores
    return filtro.reduce((sum, num) => sum + num);
}

