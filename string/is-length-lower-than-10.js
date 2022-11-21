//Faça uma função chamada isLengthLowerThan10 que recebe um parâmetro chamado val do tipo string e retorna um boolean 
//indicando se o comprimento da string é menor que 10

export function isLengthLowerThan10(val)
{
    //usando o .lenght pego o tamanho do val e uso o > pra saber se é menor que 10
    return (val.length < 10);
}
