//Faça uma função chamada arrayResize que recebe um parâmetro chamado list do tipo array e 
//outro parâmetro chamado size do tipo number e retorna um array contendo os primeiros itens do parâmetro list limitados pelo tamanho do parâmetro size

export function arrayResize(list, size)
{
    //a funcao .slice(), pega (n) valores da lista começando de (i), então retorno array.slice(i, n) -> list.slice(0, size)
    return list.slice(0, size);
}