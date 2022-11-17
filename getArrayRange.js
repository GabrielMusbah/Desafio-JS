//Faça uma função chamada getArrayRange que recebe dois parâmetros chamados begin e end do tipo number e retorna um array com a sequência de números entre os dois parâmetros informados de forma inclusiva

function getArrayRange(begin, end)
{

    //primeiro verifico se os valores são iguais, se for a funcao para e retorna 'valores iguais'
    if (begin == end){
        return 'valores iguais';
    } //se não forem iguais continua
    else {
        //gero um array vazio
        var list = []
        //se o end for maior a lista vai ser crescente
        if (end > begin){
            //vai adicionar os vales (i) de forma crescente (i++)
            for (let i = begin; i <= end; i++){
                list.push(i);
            }
        } // se o begin for maior a lista vai ser decrescente
        else if (end < begin){
            //vai adicionar os vales (i) de forma decrescente (i--)
            for (let i = begin; i >= end; i--){
                list.push(i);
            }
        }
        //retorna o resultado
        return list;
    }
}