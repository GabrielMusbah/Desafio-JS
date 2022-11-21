//Faça uma função chamada shuffleString que recebe um parâmetro chamado text do tipo string e retorna uma string com o valor do parâmetro "embaralhado"

export function shuffleString(val)
{
    //variavel pra separar a palavra em uma lista de caracter
    var text = val.split('');

    //loop que roda do tamanho ate o 0
    for(let i = text.length - 1; i > 0; i--){

        //gera numeros random
        var rand = Math.floor(Math.random() * (i + 1));

        // cria a variavel temp (temporaria) para armazenar o valor do indice [i] do text
        var temp = text[i];

        //o text[i] receber o text[rand]
        text[i] = text[rand];

        //o text[rand] recebe o temp, assim os valores vão trocando
        text[rand] = temp;
    } 

    //junta tudo numa palavra so, usando o join(''), sem espaços
    return text.join('')
}