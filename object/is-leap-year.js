//Faça uma função chamada isLeapYear que recebe um parâmetro chamado date do tipo Date e retorna um boolean indicando se o ano for bisexto

export function isLeapYear(year)
{
    //retorna true se for divisivel por 4 que o torna bisexto
    return (year % 4 == 0);
}


