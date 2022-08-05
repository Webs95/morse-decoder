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
    let arrExpr = [];
    let arrKeys = [];
    let a = '';
    let res = '';
  
    for (let i = 0; i < expr.length; i = i + 10) {
      arrExpr.push(expr.slice(0 + i, 10 + i));
    }
  
    for (let i = 0; i < arrExpr.length; i++) {
      for (let j = 0; j <= arrExpr[i].length; j += 2) {
        if (arrExpr[i].slice(0 + j, 2 + j) == 10) {
          a = a + '.';
        } else if (arrExpr[i].slice(0 + j, 2 + j) == 11) {
          a = a + '-';
        } else if (arrExpr[i] == '**********') {
          a = a + ' ';
          break;
        }
      }
      arrKeys.push(a);
      a = '';
    }
  
    for (let i = 0; i < arrKeys.length; i++) {
      if (arrKeys[i] === ' ') {
          res = res + ' ';
        continue;
      } else {
          res = res + MORSE_TABLE[arrKeys[i]];
      }
    }
  
    return res;
  }
  
  module.exports = {
    decode,
  };