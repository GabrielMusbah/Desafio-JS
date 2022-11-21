//Faça uma função chamada isPrime que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o parâmetro é um número primo

export function isPrime(n) {

    //com switch criei 3 validações pra evitar processamento
    switch (n) {
        case (1):
            return false;
        
        case (2):
            return true;

        case ((n % 2 == 0) && n != 2):
            return false;

        default://se nenhuma das 3 validações passar uso o codico pra ver se é ou não primo
            for (var i = 2; i <= Math.sqrt(n); i++)
            if (n % i == 0) return false;
            return true;
    }
}
