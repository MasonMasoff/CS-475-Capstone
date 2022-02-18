/*    Tools    */
//  Function to take any string, remove the space, and put the sequences in an array
function toArray(string) {
    var arr = string.split(' ');
    return arr;
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
    var s = toArray(string);
    s = binaryListToDecimal(s);
    s = toArray(s);
    s.pop();    // Removes last entry from the list just for cleaning ('')
    s = decimalListToASCII(s);

    return s;
}

// Function to take any binary sequence given, make sure it has 8 bits by adding leading zeros to it
function binaryLengthCheck(list) {
    var arr = toArray(list);
    var list = [];
    console.log(`The array that we are testing for is: ${arr}`);
    for(var i = 0; i < arr.length; i++) {
        var temp = arr[i]
        console.log(`The elements in this array are: ${temp}`);
        while(temp.length < 8) {
            temp = '0' + temp;
        }
        list += temp + ' ';
    }
    return list;
}

function lastTwo(list) {
    const n = 2;    // Last 2 bits we want
    var s = '';     // String to put the last two digits into
    for(var i = 0; i < list.length; i++) {
        var str = list[i];
        s += str.substring(str.length - n) + ' ';
    }
    s = toArray(s);
    s.pop();        // Removes last entry from the line just for cleaning ('')
    return s;
}
 
/* -------------Testing------------- */
var ttb = textToBinary('Hi');
console.log(`'Hi' in Binary is: ${ttb}`);
var blc = binaryLengthCheck(ttb);
console.log(`Binary Length Check:\n${blc}`);

/* -------------Testing------------- */

// Imports & Exports
export {toArray, textToBinary, binaryLengthCheck, lastTwo};