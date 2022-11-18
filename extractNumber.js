//Faça uma função chamada extractNumber que recebe um parâmetro chamado val do tipo string 
//e retorna um number extraindo/eliminando todos os caracteres que não forem numéricos

function extractNumber(val)
{  
    //usando o .replace.replace(/\D/g, ''), troco os valores não numericos por '' -> vazio, e o Number deixa o resultado numerico
    return Number(val.replace(/\D/g, ''));
}

