// Function that takes a string as input, outputs a binary conversion
function textToBinary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

// Function that takes binary as input, outputs a text conversion




console.log('Text To Binary:');
console.log(textToBinary('Hello'))
