/*    toArray    */
//  Takes a string, and turns it into an array that is deliminated by ','
function toArray(str, delim) {
    var arr = {};
    return arr = str.split(',');
}

/*    find    */
//  Returns index of stop character
function find(arr) {
    const stp = '11111111';
    var index = arr.indexOf(stp);

    return index;
}

function decodeString(str) {
    var arr = toArray(str, ',');
    console.log(find(arr));
}

decodeString('01001001,01100100,01101111,01101101,01101101,00101110,00100001,01010101,11111111,01101111,01110010,01101100,01100100')