// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // encoding
    const inputLowerCase = input.toLowerCase();
    let result = "";
    let row, col;
    let decodeTable = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "j"],
    ];

    let Numbervalue = parseInt(input);

    if (!encode) {
      let withoutSpace = input.replace(/ /g, "");
      if (withoutSpace.length % 2 !== 0) return false;

      let letter = "";

      for (let index = 0; index < inputLowerCase.length; index += 2) {
        // get the col and row
        col = inputLowerCase[index];

        row = inputLowerCase[index + 1];

        if (inputLowerCase.charCodeAt(index) !== 32) {
          // get the aphabet
          for (let i = 0; i < decodeTable.length; i++) {
            for (let j = 0; j < decodeTable.length; j++) {
              if (row - 1 === i && col - 1 === j) {
                letter = decodeTable[i][j];

                continue;
              }
            }
          }

          result += letter;
        } else {
          result += " ";
          index = index - 1;
        }
      }
    } else {
      for (let index = 0; index < inputLowerCase.length; index++) {
        const character = inputLowerCase.charCodeAt(index);
        console.log(`character: ${character}`);
        if (character !== 32) {
          row = parseInt((inputLowerCase.charCodeAt(index) - 97) / 5) + 1;

          col = ((inputLowerCase.charCodeAt(index) - 97) % 5) + 1;

          if (character === 107) {
            row = row - 1;
            col = 5 - col + 1;
          }

          else if (character >= 106) {
            if (col === 1) {
              col = 6;
              row = row - 1;
            }
            col = col - 1;
          }
          result += col + "" + row;
        } else {
          result += " ";
        }
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
  //  input = input.toLowerCase()
  //  let result = "";
  //  if (encode) {
  //    for (let i = 0; i < input.length; i++) {
  //      let letter = input[i].charCodeAt(0) - 97;
  //      console.log(letter)
  //      if (letter > 10) letter--;
  //      let row = Math.floor(letter / 5) + 1;
  //      let column = (letter % 5) + 1;
  //      console.log(row, column);
  //      result += column;
  //      result += row;
  //
  //    }
  //  } else {
  //    for (let i = 0; i < input.length; i+= 2) {
  //      let column = parseInt(input[i]);
  //      let row = input[i + 1] - 1;
  //      let number = (row * 5) + column + 96;
  //      if (number > 106) number ++;
  //      result += String.fromCharCode(number);
  //    }
  //  }
  //  return result;