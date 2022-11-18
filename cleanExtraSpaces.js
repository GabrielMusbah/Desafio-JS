//Faça uma função chamada cleanExtraSpaces que recebe um parâmetro chamado val do tipo string com várias palavras separadas por um ou mais espaços e retorna uma string removendo excessos de espaços

function cleanExtraSpaces(val)
{
    //o split separa os a string, o filter devolve apenas os valores 'validos' os “falsy values” -> string vazia são retirados e o join junta em uma string
    return val.split(' ').filter(function (i) {return i;}).join(' ');
}

