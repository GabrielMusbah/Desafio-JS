//Faça uma função chamada isString que recebe um parâmetro chamado val e retorna um boolean indicando se o parâmetro é do tipo string

function isString(val)
{
    //usando typeof(val) tenho o tipo da varivel, ai comparo pra ver se é 'string' ou nao
    if (typeof(val) == 'string'){
        return true;
    } else {
        return false;
    }
}