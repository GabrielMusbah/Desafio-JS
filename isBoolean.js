//Faça uma função chamada isBoolean que recebe um parâmetro chamado val e retorna um boolean indicando se o parâmetro é do tipo boolean

function isBoolean(val)
{
    // usando o tpeof(val) se o retorno for boolena retorna true, se não false
    return (typeof(val) == 'boolean');
}
