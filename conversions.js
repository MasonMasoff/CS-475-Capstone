// Function that takes a string as input, outputs a binary conversion
function textToBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

 // Function to take a string, remove the space, and put the sequences in a list
function stringToList(string) {
    var result = string.split(' ');
    return result;
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

function binaryListToDecimal(list) {
    console.log(`The length of this list is ${list.length}`);
    for(var i = 0; i < list.length; i++) {
        console.log(`This has ran ${i} times!`)
    };
}

// Tests
//      Text to Binary
console.log('Text To Binary:');
console.log(textToBinary('Hello'));
console.log('\n');

//      Binary to Decimal
console.log('Binary to Decimal:');
console.log(binaryToDecimal('1001000'));
console.log('\n');

//      Binary String to List
var binaryStringToList1 = textToBinary('Hello)');
console.log('Binary String to List:');
console.log(stringToList(binaryStringToList1));
console.log('\n');

// Temp Testing
binaryListToDecimal(stringToList(binaryStringToList1));
