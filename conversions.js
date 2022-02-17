// Math Functions
//      Function that takes a string as input, outputs a binary conversion
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

//Utility Functions
//      Function to take a string, remove the space, and put the sequences in a list
function stringToList(string) {
    var result = string.split(' ');
    return result;
}

function binaryListToDecimal(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(binaryToDecimal(list[i]));
    }
}
// Tests
console.log('Testing:');
var tempTestVar = textToBinary('Hello');
console.log(tempTestVar)
binaryListToDecimal(stringToList(tempTestVar));
// console.log(binaryListToDecimalList(stringToList(binaryStringToList1)))
