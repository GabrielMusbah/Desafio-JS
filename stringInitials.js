//Faça uma função chamada stringInitials que recebe um parâmetro chamado text do tipo string contendo várias palavras e retorna uma string extraindo apenas o primeiro caractere de cada palavra em caixa alta

function stringInitials(text)
{
    //comando .split(' '), separa a var text em um array com uma "lista" das palavras do texto
    var textSplit = text.split(' ');
    //crio uma var string vazia
    var texto = '';
    //salvo o tamanho da lista
    var tamanho = textSplit.length;

    //usando o tamanho da lista, eu rodo a lista toda pelo for
    for (let i = 0; i < tamanho; i++){
        //em forma de loop a var texto (inicialmente vazia), recebe o caractere [0] -> primeiro de cada palavra da lista
        texto = texto + textSplit[i].substring(0,1);
    }

    //retorna o resultado
    return texto;
}