//Faça uma função chamada isLeapYear que recebe um parâmetro chamado date do tipo Date e retorna um boolean indicando se o ano for bisexto

function isLeapYear(data)
{
    //a var ano pega apenas o ano da variavel data
    var ano = data.getFullYear();

    //se o ano for divisivel por 4 ele se caracteriza como bisexto
    if (ano % 4 == 0){
        return true;
    } else {
        return false;
    }
}
