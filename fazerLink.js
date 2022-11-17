var link = "";

var links = ['isNull','isBoolean','booleanResponse','invertBoolean','isNumber','isGreaterThan10','isLowerThan20','isBetween10and20','isMultipleOf2','isMultipleOf5','isEven','isGreaterThan100AndMultipleOf3','invertSign','isPositiveAndNegative','sumNumbers','subNumbers','mulNumbers','divNumbers','powNumbers','halfNumber','doubleNumber','number50Pct','increaseNumberBy10Pct','decreaseNumberBy10Pct','biggestNumber','smallestNumber','biggestNumberFrom3','isPrime','isString','isLengthGreaterThan5','isLengthLowerThan10','isLengthBetween10and20','concatString','countVowels','repeatString','shuffleString','wordReverse','extractNumber','cleanExtraSpaces','stringWrap','removeEdges','stringInitials','arrayResize','getArrayRange','arraySum','arrayAvg','filterOddNumbers','groupByOddEven','groupByInitials','currentDate','isLeapYear']

var tamanho = links.length;

for(let i = 0; i < tamanho; i++){
    let temp = `<script type="text/javascript" src="${links[i]}.js"></script>`
    link = link + temp
}

console.log(link)