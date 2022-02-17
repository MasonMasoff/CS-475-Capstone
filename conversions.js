//  Function that takes a string as input, outputs a binary conversion
function textToBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

//  Function to take a string, remove the space, and put the sequences in a list
function toList(string) {
    var result = string.split(' ');
    return result;
}

//  Function that takes a list of binary sequences, returns that list in decimal form
function binaryListToDecimal(list) {
    var s = '';
    for (var i = 0; i < list.length; i++) {
        s += binaryToDecimal(list[i]) + ' ';
    }
    // console.log(s);
    return s;
}

//  Function that takes binary as input, outputs a decimal conversion
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

// Tests
console.log('Testing:');

console.log('Expected: Hello in binary');
var tempTestVar = textToBinary('Hello');
console.log(tempTestVar)

console.log('Expected: Binary into list');
tempTestVar = toList(tempTestVar);
console.log(tempTestVar);

console.log('Expected: Binary to Decimal')
tempTestVar = binaryListToDecimal(tempTestVar);
console.log(tempTestVar);

console.log('Expected: Decimal List');
testTempVar = toList(tempTestVar);
console.log(testTempVar);




