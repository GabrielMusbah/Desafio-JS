//Faça uma função chamada invertBoolean que recebe um parâmetro chamado val do tipo boolean e retorna o boolean invertido

function invertBoolean(val)
{
    //usei um if simples, se for true retorna false e false retorna true
    if (val == true){
        return false;
    } else if (val == false){
        return true;
    } else {
        return 'valor invalido!';
    }
}