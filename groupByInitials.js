//Faça uma função chamada groupByInitials que recebe um parâmetro chamado list do tipo array e 
//retorna um object com as strings agrupadas pela letra inicial, 
//outros tipos além de strings enviados junto com a lista devem ser ignorados e removidos.

function groupByInitials(list)
{
    //criei um objeto vazio
    var listObj = {};

    //gerei um loop que roda do indice 0 ate o tamanho do array de forma crescente
    for (let i = 0; i < list.length; i++){

        //variavel text, recebe a palavra que esta no indice [i] da lista
        var text = list[i];
        //variavel indice, recebe a primeira letra text[0] da palavra[i] do array. A .toLowerCase() deixa minusculo
        //O .normalize e o .replace retiram os acentos do indice
        var indice = text[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        //gera um array vazio
        var listArr = [];

        //se não tem um array com o indice no objeto ele é gerado
        if(listObj[indice] === undefined) {
            //gera um array com o indice = indice e valor na lista = text
            listArr.push(text);
            listObj[indice] = listArr
        } //se ja existe um array com o indice apenas é adicionado (push), o texto no array respectivo ao indice 
        else {
            listObj[indice].push(text)
        }
    }

    //retorna o resultado
    return listObj;
}
