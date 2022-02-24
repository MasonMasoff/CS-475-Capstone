/*    toArray    */
//  Takes a string, and turns it into an array that is deliminated by ' '
function toArray(str) {
    var arr = {};
    return arr = str.split(' ');
}

/*    toList    */
// Takes an array, makes it a list with a ' ' inbetween each element
function toList(arr) {
    var list = '';
    for (var i = 0; i < arr.length; i++) {
        list += arr[i] + ' ';
    }
    return list;
}

/*    Text to Binary    */
//  Function that takes a string as input, outputs a binary conversion
function textToBinary(str) {
    return str.split('').map(function (char) {
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

/*    intoTwo    */
// Function that takes string of straight binary from binaryLengthCheck
function intoTwo (arr) {
    var str = arr.toString().replace(/,/g,'');
    var s = ''
    for(var i = 0; i < str.length; i += 2){
        var temp = str[i] + str[i+1] + ' ';
        s += temp; 
    }
    return toArray(s);
}


/*    replace    */
// Function that takes textToEncode and replaces the last two bits of each element of the array with two bits at a time from secretMessage
function replace (arr1, arr2) {
    for (var i = 0; i < arr2.length ; i++) {
        let temp = arr1[i];
        temp = arr1[i].slice(0, -2) + arr2[i];
        arr1[i] = temp;
    }
    var stopChar = '11111111'
    arr1.splice(arr2.length, 0, stopChar);
    return arr1;
}


function encodeString(string1, string2) {
    // Everything to get a string of binary with the text given with length check and put it into an array
    var textToEncode = textToBinary(string1);
    textToEncode = toArray(textToEncode);
    textToEncode = binaryLengthCheck(textToEncode);
    
    //      console.log('textToEncode');
    //      console.log(textToEncode);

    // Everything to get secretMessage up to 8 bits and into arr of 2 bits per each element
    var secretMessage = textToBinary(string2);
    secretMessage = toArray(secretMessage);
    secretMessage = binaryLengthCheck(secretMessage);
    secretMessage = intoTwo(secretMessage);
    secretMessage.pop();
    
    //      console.log('secretMessage');
    //      console.log(secretMessage);

    // Everything to take the array of binary from example string, iterate through that, append the secret message two bits at a time with secretMessage, and return a list of exampleMessage binary sequences
    var encodedMessage = replace(textToEncode, secretMessage);
    
    //      console.log('Encoded Message:');
    //      console.log(encodedMessage));

    return encodedMessage;
}

// Tests
console.log(encodeString('Hello, World', 'Me'));
// console.log(encodeString('Hello, this is the text that I want to encode with a secret message', 'Ooga Booga'));