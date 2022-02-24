/*    toArray    */
//  Takes a string, and turns it into an array that is deliminated by ','
function toArray(str, delim) {
    var arr = {};
    return arr = str.split(',');
}

function decodeString(string) {
    var arr = toArray(string, ',');

    console.log(arr);
}

decodeString('01001001,01100100,01101111,01101101,01101101,00101110,00100001,01010101,11111111,01101111,01110010,01101100,01100100')