//Faça uma função chamada countVowels que recebe um parâmetro chamado val do tipo string e retorna um number com a contagem das vogais

function countVowels(val)
{
    return val.toLowerCase() //deixa tudo minusculo
    .normalize('NFD')//separa as letras dos acentos
    .match(/[aeiou]/g)//conta quantas vogais tem
    ?.length ?? 0;//devolve a quantidade de vogais se não for null, e 0 se for null
}

