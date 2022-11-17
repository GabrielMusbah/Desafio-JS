//NULL

function isNull(val) 
{
    if (val == null){
        return true;
    } else {
        return false;
    }
}

//BOOLEAN

function isBoolean(val)
{
    if (val == true || val == false){
        return true;
    } else {
        return false;
    }
}

function booleanResponse(val)
{
    if (val == true){
        return 'sim';
    } else if (val == false){
        return 'não';
    } else {
        return 'valor invalido!';
    }
}

function invertBoolean(val)
{
    if (val == true){
        return false;
    } else if (val == false){
        return true;
    } else {
        return 'valor invalido!';
    }
}

//NUMBER

function isNumber(val)
{
    if (typeof(val) === "number"){
        return true;
    } else {
        return false;
    }
}

function isGreaterThan10(val)
{
    if (val > 10){
        return true;
    } else {
        return false;
    }
}

function isLowerThan20(val)
{
    if (val < 20){
        return true;
    } else {
        return false;
    }
}

function isBetween10and20(val)
{
    if (isGreaterThan10(val) && isLowerThan20(val)){
        return true;
    } else {
        return false;
    }
}

function isMultipleOf2(val)
{
    if (val % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function isMultipleOf5(val)
{
    if (val % 5 == 0){
        return true;
    } else {
        return false;
    }
}

function isEven(val)
{
    return isMultipleOf2(val);
}

function isGreaterThan100AndMultipleOf3(val)
{
    if (val > 100 && val % 3 == 0){
        return true;
    } else {
        return false;
    }
}

function invertSign(val)
{
    if (val == 0){
        return 0;
    } else {
        return val * -1;
    }
}

function isPositiveAndNegative (val1, val2)
{
    if ((val1 > 0 && val2 < 0) || (val1 < 0 && val2 > 0)){
        return true;
    } else {
        return false;
    }
}

function sumNumbers(val1, val2)
{
    return val1 + val2;
}

function subNumbers(val1, val2)
{
    return val1 - val2;
}

function mulNumbers(val1, val2)
{
    return val1 * val2;
}

function divNumbers(val1, val2)
{
    return val1 / val2;
}

function powNumbers(val1, val2)
{
    var val = 1;

    for (let i = 0; i < val2; i++){
        val *= val1;
    }

    return val;
}

function halfNumber(val)
{
    return val / 2;    
}

function doubleNumber(val)
{
    return mulNumbers(val, 2);
}

function number50Pct(val)
{
    return (val / 100) * 50;
}

function increaseNumberBy10Pct(val)
{
    return val + ((val / 100) * 10);
}

function decreaseNumberBy10Pct(val)
{
    return val - ((val /100) * 10)
}

function biggestNumber(val1, val2)
{
    if (val1 > val2){
        return val1;
    } else if (val1 < val2){
        return val2;
    } else {
        return 'numeros iguais!'
    }
}

function smallestNumber(val1, val2)
{
    if (val1 < val2){
        return val1;
    } else if (val1 > val2){
        return val2;
    } else {
        return 'numeros iguais!'
    }
}

function biggestNumberFrom3(val1, val2, val3)
{
    if (val1 > val2 && val1 > val3){
        return val1;
    } else if (val2 > val1 && val2 > val3){
        return val2;
    } else if (val3 > val1 && val3 > val2){
        return val3;
    } else {
        return 'Numeros iguais!'
    }
}

function isPrime(val)
{
    var divisores = 0;
    for (let i = 1; i <= val; i++){
        if (val % i == 0){
            divisores++;
        }
    }

    if (divisores == 2){
        return true;
    } else {
        return false;
    }
}

//STRING

function isString(val)
{
    if (typeof(val) == 'string'){
        return true;
    } else {
        return false;
    }
}

function isLengthGreaterThan5(val)
{
    if (val.length > 5){
        return true;
    } else {
        return false;
    }
}

function isLengthLowerThan10(val)
{
    if (val.length < 10){
        return true;
    } else {
        return false;
    }
}

function isLengthBetween10and20(val)
{
    if (isLengthGreaterThan5(val) && isLengthBetween10and20(val)){
        return true;
    } else {
        return false;
    }
}

function concatString(val1, val2)
{
    return val1 + val2;
}

function countVowels(val)
{
    return val.match(/[aeiou]/gi).length;
}

function repeatString(val1, val2)
{
    var text = "";
    for (let i = 0; i < val2; i++){
        text += val1;
    }

    return text;
}

function shuffleString(val)
{
    var text = "";

    for (let i = val.length - 1; i >= 0 ; i-- ){
        text = text + val[i];
    }

    return text;
}

function wordReverse(val)
{
    var text = "";

    for (let i = val.split(" ").length; i > 0; i--){
        text = text + " " + val.split(" ")[i - 1]
    }

    return text;

}

function extractNumber(val)
{
    return val.replace(/\D/g, '')
}

function cleanExtraSpaces(val)
{
    var text = '';
    var textSplit = val.split(' ');

    for(let i = textSplit.length; i > 0; i--){
        if (textSplit[i - 1] != ''){
            text = text + ' ' + textSplit[i - 1];
        }
    }

    return text;
}

function stringWrap(text, wrapper)
{
    return wrapper + text + wrapper;
}

function removeEdges(text)
{
    var texto = text.substring(1, text.length - 1);

    return texto;
}

function stringInitials(text)
{
    var textSplit = text.split(' ');
    var texto = '';
    var tamanho = textSplit.length;

    for (let i = 0; i < tamanho; i++){
        texto = texto + textSplit[i].substring(0,1);
    }

    return texto;
}

//ARRAY

function arrayResize(list, size)
{
    return list.slice(0, size);
}


function getArrayRange(begin, end)
{

    if (begin == end){
        return 'valores iguais';
    } else {
        var list = []
        if (end > begin){
            for (let i = begin; i <= end; i++){
                list.push(i);
            }
        } else if (end < begin){
            for (let i = begin; i >= end; i--){
                list.push(i);
            }
        }
    
        return list;
    }
}

function arraySum(list)
{
    var num = 0;

    for (let i = list.length; i >= 0; i--){
        if (typeof(list[i]) == 'number'){
            num = num + list[i];
        } else {
            num = num;
        }
    }

    return num;
}

function arrayAvg(list)
{

    var soma = arraySum(list);
    
    var tamanho = list.length;

    return soma / tamanho;
}

function filterOddNumbers(list){

    var lista = [];

    for (let i = list.length; i > 0; i--){
        if(list[i - 1] % 2 != 0){
            lista.push(list[i - 1]);
        }
    }

    return 
}

function groupByOddEven(list)
{


    var lista = {
        odd: [],
        even: []
    }

    for (let i = list.length; i > 0; i--){
        if(list[i - 1] % 2 != 0){
            lista.odd.push(list[i - 1]);
        }
    }

    for (let i = list.length; i > 0; i--){
        if(list[i - 1] % 2 == 0){
            lista.even.push(list[i - 1]);
        }
    }

    return lista;

}

function groupByInitials(list)
{
    var listObj = {};

    for (let i = 0; i < list.length; i++){

        var text = list[i];
        var indice = text[0].toLowerCase();
        var listArr = [];

        if(listObj[indice] === undefined) {
            listArr.push(text);
            listObj[indice] = listArr
        } else {
            listObj[indice].push(text)
        }
    }

    return listObj;
}

function currentDate() 
{
    var data = new Date()

    function formatar(data){
        return [
            (data.getDate()).toString().padStart(2,0),
            (data.getMonth() + 1).toString().padStart(2,0),
            data.getFullYear(),
        ].join('/');
    }

    return formatar(data);
}

function isLeapYear(data)
{
    var ano = data.getFullYear();

    if (ano % 4 == 0){
        return true;
    } else {
        return false;
    }
}
