//Faça uma função chamada extractNumber que recebe um parâmetro chamado val do tipo string e retorna um number extraindo/eliminando todos os caracteres que não forem numéricos

function extractNumber(val)
{  
    return Number (val.toLowerCase().replace(/[a-z]/g, ''));//usando o .replace(/[a-z]/g, ''), troco os valores não numericos por '' -> vazio, e o Number deixa o resultado numerico
}
