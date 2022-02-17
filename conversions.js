// Function that takes a string as input, outputs a binary conversion
function textToBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

// Function that takes binary as input, outputs a decimal conversion
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

// NEED to have the binaryToDecimal be able to take in multiple strings for more than one number
// EX: 1001000 1100101 1101100 1101100 1101111
// EX: 72 101 108 108 111

// Tests
//      Text to Binary
console.log('Text To Binary:');
console.log(textToBinary('Hello'));

console.log('\n');

//      Binary to Decimal
console.log('Binary to Decimal:');
console.log(binaryToDecimal('1001000'));
