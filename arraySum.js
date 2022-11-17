//Faça uma função chamada arraySum que recebe um parâmetro chamado list do tipo array e retorna um number que é a soma de todos os números do array, outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function arraySum(list)
{
    //cria uma variavel number vazia
    var num = 0;

    //loop que roda o (tamanho do array)vezes
    for (let i = list.length; i >= 0; i--){
        //verifica se o dado do respectivo indice é number, se for ele soma a variavel vazia
        if (typeof(list[i]) == 'number'){
            num = num + list[i];
        }//se não for number ele mantem o valor igual 
        else {
            num = num;
        }
    }
    //retorna o resultado
    return num;
}