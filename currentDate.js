//Faça uma função chamada currentDate que não recebe parâmetros e retorna a data atual no formato: DD/MM/YYYY

function currentDate() 
{
    var data = new Date()//a variavel data recebe o objeto Date()

    return [     
        (data.getDate()).toString().padStart(2,0),//pega o dia da data, e adiciona um zero a esqueta se o valor for menor que de 8 -> 08       
        (data.getMonth() + 1).toString().padStart(2,0),//pega o mes da data
        data.getFullYear(),//pega o ano da data
    ].join('/');//junta os 3 valores separando por / gerando -> DD/MM/YYYY
}
