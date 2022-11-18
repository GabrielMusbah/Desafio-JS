//Faça uma função chamada isNumber que recebe um parâmetro chamado val e retorna um boolean indicando se o parâmetro é do tipo number

function isNumber(val)
{
    //usando typeof(val) tenho o tipo da varivel, ai comparo pra ver se é 'number' ou nao
    return (typeof(val) === "number");
}