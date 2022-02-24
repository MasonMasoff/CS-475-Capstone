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

/*    getEncodedMessage    */
// Function that takes an array, cuts it at the stop character, and gets the last two bits from each binary sequence to decode
function getEncodedMessage(arr) {
    arr = arr.slice(0, find(arr));
    arr = lastTwo(arr);

    return arr;
}

function decodeString(str) {
    var arr = toArray(str, ',');
    arr = getEncodedMessage(arr);

    console.log(arr);
}

decodeString('01001001,01100100,01101111,01101101,01101101,00101110,00100001,01010101,11111111,01101111,01110010,01101100,01100100')