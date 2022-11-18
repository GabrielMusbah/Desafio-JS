//Faça uma função chamada stringInitials que recebe um parâmetro chamado text do tipo string contendo várias palavras e 
//retorna uma string extraindo apenas o primeiro caractere de cada palavra em caixa alta

function stringInitials(text)
{
    //o split separa a string em um array, o map pega apenas o 1º caracter de cada palavra, 
    //o join monta uma string com os caractere e o toUpperCase deixa em caixa alta
    return text.split(' ').map(i => i.charAt(0)).join('').toUpperCase()
}