//Faça uma função chamada removeEdges que recebe um parâmetro chamado text do tipo string e retorna a string sem o primeiro e último caractere

function removeEdges(text)
{
    // a funcao .substring(), retira caracteres da var text, tiro a primera (1) e a ultima text.lenght (devolve o tamanho total) - 1
    var texto = text.substring(1, text.length - 1); 

    return texto; //retorna o resultado
}

