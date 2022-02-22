/* This file is to:
    Encode
    DONE - Convert input text to binary
    DONE - Take the binary, make sure it is the correct length of 8, if not add 0's to the beginning
    DONE - Take the binary given, seperate the last two bits
    DONE - Convert the last two bits to a string 
    DONE - Take that string, overwrite it with the text to encode with some sort of stop character
    - Split it into groups of two again
    - Append that to the end of the original binary
*/

/*--------------------------------------------------------------------------------*/

/*    To Array    */
//  Takes a string, and turns it into an array that is deliminated by ' '
function toArray(string) {
    var arr = {};
    return arr = string.split(' ');
}

function toList(arr) {
    var list = '';
    for (var i = 0; i < arr.length; i++) {
        list += arr[i] + ' ';
    }
    return list;
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
    var arr = list;
    for(var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        while(temp.length < 8) {
            temp = '0' + temp;
        }
        arr[i] = temp;
    }
    return arr;
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

/*    intoTwo    */
// Function that takes string of straight binary from binaryLengthCheck
function intoTwo (arr) {
    var str = arr.toString().replace(/,/g,'');
    console.log(str);

    return arr;
}


/*    replace    */
// Function that takes textToEncode and replaces the last two bits of each element of the array with two bits at a time from secretMessage
function replace (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        let temp = arr1[i];
        temp = arr1[i].slice(0, -2) + arr2[i];
        arr1[i] = temp;
    }
    return arr;
}


function encodeString(string1, string2) {
    // Everything to get a string of binary with the text given with length check and put it into an array
    var textToEncode = textToBinary(string1);
    textToEncode = toArray(textToEncode);
    textToEncode = binaryLengthCheck(textToEncode);
    console.log('textToEncode');
    console.log(textToEncode);

    // Everything to get secretMessage up to 8 bits and into arr of 2 bits per each element
    var secretMessage = textToBinary(string2);
    secretMessage = toArray(secretMessage);
    secretMessage = binaryLengthCheck(secretMessage);
    secretMessage = intoTwo(secretMessage);

    //  secretMessage = intoTwo(secretMessage);
    console.log('secretMessage');
    console.log(secretMessage);

    // Everything to take the array of binary from example string, iterate through that, append the secret message two bits at a time with secretMessage, and return a list of exampleMessage binary sequences
    // console.log('Replaced:');
    // console.log(replace(textToEncode, secretMessage));
    
    // Testing

    return 'end';
}

console.log(encodeString('Hello, World', 'Me'));
//  console.log(encodeString('Hello, this is the text that I want to encode with a secret message', 'Ooga Booga'));

