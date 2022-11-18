//Faça uma função chamada wordReverse que recebe um parâmetro chamado 
//text do tipo string contendo várias palavras separadas por espaço e retorne uma string com as palavras invertidas de trás para frente

function wordReverse(val)
{
    //separa a string pelos espaços ' ' e inverte a ordem e transforma em string novamente
    return val.split(' ').reverse().join(' ');
}