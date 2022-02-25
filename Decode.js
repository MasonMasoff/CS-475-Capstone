/*    toArray    */
//  Takes a string, and turns it into an array that is deliminated by ','
function toArray(str, delim) {
    var arr = {};
    
    return arr = str.split(delim);
}

/*    find    */
//  Helper function to return the index of stop character
function find(arr) {
    const stp = '11111111';
    var index = arr.indexOf(stp);

    return index;
}

/*    lastTwo    */
//  Helper function to return the last n bits of each element of an array of binary sequences
// EX: ['10110101','00101110'] TO ['01','10']
function lastTwo(arr) {
    const n = 2;    // Last n bits we want
    var s = '';     // String to put the last two digits into
    for(var i = 0; i < arr.length; i++) {
        var str = arr[i];
        s += str.substring(str.length - n) + ' ';
    }
    s = toArray(s, ' ');
    s.pop();

    return s;
}

/*    intoEights    */
//  Helper function that helps sort an array with multiple sets of 2 binary values into strings with length 8
// EX: ['01', '00', '11','01', '01', '10','01', '01'] TO ['01001101','01100101']
function intoEights(arr) {
    var arr = arr.join('');
    arr = arr.match(/.{1,8}/g);
    
    return arr;
}

/*    getEncodedMessage    */
// Function that takes an array, cuts it at the stop character, and gets the last two bits from each binary sequence to decode
function getEncodedMessage(arr) {
    arr = arr.slice(0, find(arr));
    arr = lastTwo(arr);
    arr = intoEights(arr);

    return arr;
}

/*    binaryArrayToDecimal    */
//  Function that takes an array of binary values, returns that list in decimal form
function binaryArrayToDecimal(arr) {
    var s = '';
    for (var i = 0; i < arr.length; i++) {
        s += binaryToDecimal(arr[i]) + ' ';
    }
    
    return s;
}

/*    binaryToDecimal    */
//  Helper function that takes binary as input, outputs a decimal conversion
function binaryToDecimal(string) {
    let decimal = +0;
    let bits = +1;
    for(let i = 0; i < string.length; i++) {
        let currNum = +(string[string.length - i - 1]);
        if(currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    
    return(decimal);
}

/*    decimalToASCII    */
//  Function that takes a list of decimal values, returns that list in ASCII form
function decimalToASCII(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += String.fromCharCode(arr[i]);
    }
    
    return str;
}

/*    decodeString    */
//  Function that takes a string of binary, gets the last 2 bits from it, puts them into groupings of 8 bits, converts it to text, and prints it to the console
function decodeString(str) {
    var decodedString = '';
    var arr = toArray(str, ',');
    arr = getEncodedMessage(arr);
    arr = toArray((binaryArrayToDecimal(arr)), ' ');
    arr.pop();
    decodedString = decimalToASCII(arr);
    
    return decodedString;
}

var test1 = '01001001,01100100,01101111,01101101,01101101,00101110,00100001,01010101,01101100,01110010,01101100,01100101,11111111';
var test2 = '01001001,01100100,01101111,01101111,01101101,00101110,00100011,01110111,01101001,01101010,01110001,00100011,01101001,01110010,00100000,01110101,01101000,01100110,00100000,01110100,01100101,01111000,01110100,00100010,01110101,01101010,01100011,01110111,00100001,01001010,00100011,01110111,01100001,01101110,01110101,00100011,01110101,01101110,00100000,01100101,11111111,01101110,01100011,01101111,01100100,01100101,00100000,01110111,01101001,01110100,01101000,00100000,01100001,00100000,01110011,01100101,01100011,01110010,01100101,01110100,00100000,01101101,01100101,01110011,01110011,01100001,01100111,01100101';
var test3 = '01010101,01101001,01101000,01110011,00100001,01101011,01110001,00100001,01100001,00100010,01110110,01100100,01110000,01110110,00100000,01101100,01100101,01110010,01110001,01100000,01100101,01100111,00100001,01100101,01101101,01110010,00100001,01110100,01100101,01110010,01110101,00100001,11111111,00110011';
var test4 = '00100000,00100010,00100000,00100001,11111111,00100001,00100001,00100001,00100001'

console.log(decodeString(test1))
console.log(decodeString(test2))
console.log(decodeString(test3))
console.log(decodeString(test4))