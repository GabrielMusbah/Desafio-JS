//Faça uma função chamada isPositiveAndNegative que recebe dois parâmetros chamados val1 e val2 do 
//tipo number e retorna um boolean true caso um número for negativo e o outro positivo, não importa a ordem

export function isPositiveAndNegative (val1, val2)
{
    //usando XOR (^), verifico se val1 ou val2 são negativos, mas não ambos
    return (val1 < 0 ^ val2 < 0);
}