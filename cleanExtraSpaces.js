//Faça uma função chamada cleanExtraSpaces que recebe um parâmetro chamado val do tipo string com várias palavras separadas por um ou mais espaços e retorna uma string removendo excessos de espaços

function cleanExtraSpaces(val)
{
    //gera uma var string vazia
    var text = '';
    //salva a var (val) em uma lista separando os as palavras por espaco
    var textSplit = val.split(' ');

    //gerei um loop que roda o indice 0 ate o tamanho total do array
    for(let i = 0; i < textSplit.length; i++){
        //se o texto do indice for diferente de '' ele é adionado ao text
        if (textSplit[i] != ''){
            text = text + ' ' + textSplit[i];
        }
    }
    //retorna o resultado
    return text;
}
