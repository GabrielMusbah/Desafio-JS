//Faça uma função chamada filterOddNumbers que recebe um parâmetro chamado list do tipo array e retorna um array apenas com os números ímpares do parâmetro list, outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function filterOddNumbers(list){

    //crio um array vario
    var lista = [];

    //gerei um loop que roda do indice 0 ate o tamanho da lista, de forma crescente
    for (let i = 0; i < list.length; i++){
        //se o valor for impar, resto da divisao por 2 ser diferente de 0, o valor é adicionado na lista
        if(list[i] % 2 != 0){
            lista.push(list[i]);
        }
    }
    //retorna o resultado
    return lista;
}

