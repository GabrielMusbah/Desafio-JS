//Faça uma função chamada booleanResponse que recebe um parâmetro chamado val do tipo boolean e retorna uma string com valor sim para true e não para false

function booleanResponse(val)
{
    //se o valor for true devolve 'sim' , false devolve 'não', se não for um valor booleano isso é devolvido ao usuario
    if (val == true){
        return 'sim';
    } else if (val == false){
        return 'não';
    } else {
        return 'valor invalido!';
    }
}