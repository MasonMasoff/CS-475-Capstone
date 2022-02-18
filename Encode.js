/* This file is to:
    Encode
    - Convert input text to binary
    - Take the binary, make sure it is the correct length of 8, if not add 0's to the beginning
    - Take the binary given, seperate the last two bits
    - Convert the last two bits to a string
    - Take that string, overwrite it with the text to encode
    - Split it into groups of two again
    - Append that to the end of the original binary
*/

/*--------------------------------------------------------------------------------*/

/*    To Array    */
//  Takes a string, and turns it into an array that is deliminated by ' '
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

/*    Binary Length Check    */
// Function that checks the length of the binary sequence, if the sequence is < 8 in length, automatically appends 0 to the beginning until it is of length 8
function binaryLengthCheck(list) {
    var arr = toArray(list);
    var list = [];
    for(var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        while(temp.length < 8) {
            temp = '0' + temp;
        }
        list += temp + ' ';
    }
    return list;
}

/*    Last Two    */
// Function that takes the last two bits from a binary sequence of 8
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

function testing(string1, string2) {
    // Everything to get the last two of the example string
    var exampleString = textToBinary(string1);
    exampleString = binaryLengthCheck(exampleString);
    var arr = [];
    arr = toArray(exampleString);
    arr = lastTwo(arr);
    // console.log(`Last two of exampleString:\n${arr}`);

    // Everything to get secretMessage up to 8 bits and into a string
    var secretMessage = textToBinary(string2);
    secretMessage = binaryLengthCheck(secretMessage);
    // Trim the string of spaces
    console.log(secretMessage);
    return 0;
}

console.log(testing('Hello, this is the text that I want to encode with a secret message', 'Ooga Booga'));
