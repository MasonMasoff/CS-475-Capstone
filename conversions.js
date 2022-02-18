/*    Tools    */
//  Function to take any string, remove the space, and put the sequences in a list
function toList(string) {
    var result = string.split(' ');
    return result;
}

/*    Text to Binary    */
//  Function that takes a string as input, outputs a binary conversion
function textToBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

/*    Binary to Text    */
//  Function that takes a string of binary values, returns that list in decimal form
function binaryListToDecimal(list) {
    var s = '';
    for (var i = 0; i < list.length; i++) {
        s += binaryToDecimal(list[i]) + ' ';
    }
    // console.log(`Test for binaryListToDecimal ${s}`);
    return s;
}

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

//  Function that takes a list of decimal values, returns that list in ASCII form
function decimalListToASCII(list) {
    var s = '';
    for (var i = 0; i < list.length; i++) {
        s += String.fromCharCode(list[i]);
    }
    return s;
}

// Function to convert from Binary to ASCII with one call
function binaryToText(string) {
    var s = toList(string);
    s = binaryListToDecimal(s);
    s = toList(s);
    s.pop();    // Removes last entry from the list just for cleaning ('')
    s = decimalListToASCII(s);

    return s;
}

// Imports & Exports
export {toList};

// Testing
/*
// To Binary Test
console.log('Expected: Binary')
console.log(textToBinary('Hello World'));

// To ASCII Test
console.log('Expected: ASCII')
var binary = '1001000 1100101 1101100 1101100 1101111 100000 1010111 1101111 1110010 1101100 1100100';
console.log(binaryToText(binary));

// Random Testing
binary = textToBinary('Hello, World');
console.log(binaryToText(binary));

binary = textToBinary('How! is, this& punctuation* test^');
console.log(binaryToText(binary));
*/

