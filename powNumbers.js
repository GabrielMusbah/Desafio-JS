//Faça uma função chamada powNumbers que recebe dois parâmetros chamados base e 
//exp do tipo number e retorna um number com a exponenciação dos parâmetros

function powNumbers(val1, val2)
{
    //variavel comecando com 1
    var val = 1;

    //um loop que repete val2 vezes
    for (let i = 0; i < val2; i++){
        //em todo loop, o val é multiplicado pela base
        val *= val1;
    }
    return val;
}