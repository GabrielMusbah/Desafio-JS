//Faça uma função chamada groupByOddEven que recebe um parâmetro chamado list do tipo array e retorna um object com duas chaves, uma chamada odd contendo um array com os números ímpares e outra chave chamada even com os números pares, outros tipos além de números enviados junto com a lista devem ser ignorados e removidos do cálculo

function groupByOddEven(list)
{

    //gero um objeto com 2 array, com indices odd e even, ambos vazios
    var lista = {
        odd: [],
        even: []
    }

    //gera um loop que roda do indice 0 ate o tamanho do array de forma crescente
    for (let i = 0; i < list.length; i++){
        //se o valor for impar (nao for divisivel por 2) é adicionado no array odd por push
        if(list[i] % 2 != 0){
            lista.odd.push(list[i]);
        }//se o valor for par (divisivel por 2) é adicionado no array even por push
        else {
            lista.even.push(list[i]);
        }
    }

    //retorna o resultado
    return lista;

}
