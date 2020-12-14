let input = [
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
]
console.log("The input is: ", input)

// function that transform 1's to 9's
function oneTOnine() {
    for (let i = 0; i < input.length; i++)
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 1)
                input[i][j] = 9;
        }
    return input;
}
////////////////////////////////////////////////////////


//function that add 1 to 9's border
function borderAdder() {

    let arrOfNine = oneTOnine(); //put the array of 9's in a new array
    console.log("Array of 9's:", arrOfNine)

    for (let i = 0; i < arrOfNine.length; i++)
        for (let j = 0; j < arrOfNine[i].length; j++) {
            if (arrOfNine[i][j] === 9)//to detect mines
            {
                if (arrOfNine[i + 1] != undefined)//for the upper mines
                {
                 if (arrOfNine[i + 1][j - 1] != undefined && arrOfNine[i + 1][j - 1] != 9) arrOfNine[i + 1][j - 1]++;   // +1  down-left  
                 if (arrOfNine[i + 1][j]     != undefined && arrOfNine[i + 1][j] != 9) arrOfNine[i + 1][j]++;           // +1  down   
                 if (arrOfNine[i + 1][j + 1] != undefined && arrOfNine[i + 1][j + 1] != 9) arrOfNine[i + 1][j + 1]++;   // +1  down-right
                }
                // for the middle mines
                if (arrOfNine[i][j - 1] != undefined && arrOfNine[i][j - 1] != 9) arrOfNine[i][j - 1]++;     // +1  left
                if (arrOfNine[i][j + 1] != undefined && arrOfNine[i][j + 1] != 9) arrOfNine[i][j + 1]++;     // +1  right

                if (arrOfNine[i - 1] != undefined)//for the downs mines
                {
                 if (arrOfNine[i - 1][j - 1] != undefined && arrOfNine[i - 1][j - 1] != 9) arrOfNine[i - 1][j - 1]++;   // +1  up-left    
                 if (arrOfNine[i - 1][j]     != undefined && arrOfNine[i - 1][j] != 9) arrOfNine[i - 1][j]++;           // +1  up       
                 if (arrOfNine[i - 1][j + 1] != undefined && arrOfNine[i - 1][j + 1] != 9) arrOfNine[i - 1][j + 1]++;   // +1  up-right   
                }

            }
        }
    return arrOfNine;
}
////////////////////////////////////////////////////////
console.log("The output is: ", borderAdder())


