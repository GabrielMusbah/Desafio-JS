//Faça uma função chamada stringWrap que recebe um parâmetro chamado text do tipo string e outro parâmetro chamado
//wrapper do tipo string e retorna uma string que é o parâmetro text "empacotado" no meio de dois parâmetros wrapper

export function stringWrap(text, wrapper)
{
    //apenas concateno um valor text, com 2 valores iguais ao redor -> wrapper text wrapper
    return wrapper + text + wrapper;
}
