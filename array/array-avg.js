//Faça uma função chamada arrayAvg que recebe um parâmetro chamado list do tipo array e 
//retorna um number que é a média de todos os números do array, 
//outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

export function arrayAvg(list)
{
    //usei o filter para retirar valores não numericos, o reduce para somar e dividi pelo tamanho para ter a media
    var filtro = list.filter(num => typeof num === 'number');
    var soma = filtro.reduce((sum, num) => sum + num);
    
    return soma / filtro.length;
}