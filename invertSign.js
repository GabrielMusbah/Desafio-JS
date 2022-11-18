//Faça uma função chamada invertSign que recebe um parâmetro chamado val do tipo number e 
//retorna um number que é o próprio parâmetro com o sinal de positivo/negativo invertido

function invertSign(val)
{
    //se não for 0, ele inverte o valor usando uma multiplicacao simples por * -1
    return (val == 0) ? 0 : val * -1;
}