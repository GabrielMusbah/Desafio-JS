//Faça uma função chamada isLengthBetween10and20 que recebe um parâmetro chamado val do tipo string e 
//retorna um boolean indicando se o comprimento da string é maior que 10 e menor que 20

export function isLengthBetween10and20(val)
{
    //uso o lenght para pegar o tamanho e valido usando > e < valido se é maior e menor e uso o && pra definir que ambas tem que ser true
    return (val.length > 10 && val.length < 20);
}