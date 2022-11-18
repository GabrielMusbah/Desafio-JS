//Faça uma função chamada getArrayRange que recebe dois parâmetros chamados begin 
//e end do tipo number e retorna um array com a sequência de números entre os dois parâmetros informados de forma inclusiva

function getArrayRange(begin, end)
{
    //gero um array vazio
    var list = []

    if(end > begin){
        //vai adicionar os vales (i) de forma crescente (i++)
        for (let i = begin; i <= end; i++){
            list.push(i);
        }
    } 
    if (end < begin) {
        //vai adicionar os vales (i) de forma decrescente (i--)
        for (let i = begin; i >= end; i--){
            list.push(i);
        }
    }
    return list;
}