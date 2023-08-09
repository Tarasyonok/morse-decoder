const { major } = require("semver");

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let ans = '';
    for (let i = 10; i <= expr.length; i += 10) {
        let bin = expr.slice(i - 10, i);
        // console.log(expr.slice(10));
        let char;
        if (bin === '**********') {
            char = ' ';
        } else {
            let morse = '';
            for (let j = 0; j < 10; j += 2) {
                if (bin[j] + bin[j + 1] === '10') {
                    morse += '.';
                }
                if (bin[j] + bin[j + 1] === '11') {
                    morse += '-';
                }
            }
            char = MORSE_TABLE[morse];
        }
        ans += char;

    }
    return ans;
}

module.exports = {
    decode
}

