//Faça uma função chamada isLengthGreaterThan5 que recebe um parâmetro chamado val do 
//tipo string e retorna um boolean indicando se o comprimento da string é maior que 5

function isLengthGreaterThan5(val)
{
    //usando o .lenght pego o tamanho do val e uso o > pra saber se é maior que 5
    if (val.length > 5){
        return true;
    } else {
        return false;
    }
}
