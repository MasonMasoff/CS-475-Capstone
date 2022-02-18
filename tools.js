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

// Function to take any binary sequence given, make sure it has 8 bits by adding leading zeros to it
function binaryLengthCheck(string) {
    var list = toList(string);
    for(var i = 0; i < list.length; i++) {
        while(list[i].length < 8) {
            list[i] = '0' + list[i];
        }
    } 
    console.log(list);
    return list;
}

function lastTwo(list) {
    const n = 2;    // Last 2 bits we want
    var s = '';     // String to put the last two digits into
    for(var i = 0; i < list.length; i++) {
        var str = list[i];
        s += str.substring(str.length - n) + ' ';
    }
    s = toList(s);
    s.pop();        // Removes last entry from the line just for cleaning ('')
    return s;
}
 
/* -------------Testing------------- */

var list = toList('Hello I want to be converted to a list');
console.log(list);

var ttb = textToBinary('Hello I want to be working');
console.log(`Text to Binary:\n${ttb}`);

var blc = binaryLengthCheck(ttb);
console.log(`Binary Length Check:\n${blc}`);
console.log(typeof(blc));


/* -------------Testing------------- */

// Imports & Exports
export {toList, textToBinary, binaryListToDecimal, decimalListToASCII, binaryToText};