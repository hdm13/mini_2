export const boardBuilder = ( row, column, mines ) => {
    /*if(mines>row*column){
        mines = (row*column)/3 } */
    //create game board
    const minefield = [];
    const mineLocation = [];

    for (let x = 0; x < row; x++) {
        let subMinefield = [];
        for (let y = 0; y < column; y++) {
            subMinefield.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
            });
        }
        minefield.push(subMinefield);
    }

    //randomize mine placement on board
    let minesCount = 0;
    while( minesCount < mines ) {
        //let x = Math.floor(Math.random()*row);
        let x = randomNum(0, row - 1);
        //let y = Math.floor(Math.random()*column);
        let y = randomNum(0, column - 1);

        if( minefield[x][y].value === 0 ) {
            minefield[x][y].value = "X";
            mineLocation.push([x, y]);
            minesCount++;
        }
    }

    //Add number of mines touching non-mine spaces to said spaces
    for (let roww = 0; roww < row; roww++) {
        for (let coll = 0; coll < column; coll++) {
            if (minefield[roww][coll].value === "X") {
                continue;
            }

            //GOOD add one to value total if mine located above space
            if (roww > 0 && 
                minefield[roww - 1][coll].value === "X") {
                minefield[roww][coll].value++;
            }
            //GOOD add one to value total if mine located top left of space
            if (roww > 0 && 
                coll > 0 &&
                minefield[roww - 1][coll - 1].value === "X") {
                minefield[roww][coll].value++;
            }
            //GOOD add one to value total if mine located top right of space
            if (roww > 0 && 
                coll < column - 1 &&
                minefield[roww - 1][coll + 1].value === "X") {
                minefield[roww][coll].value++;
            }
            //GOOD add one to value total if mine located left of space
            if (coll > 0 && 
                minefield[roww][coll - 1].value === "X") {
                minefield[roww][coll].value++;
            }
            //GOOD add one to value total if mine located right of space
            if (coll < column - 1 && 
                minefield[roww][coll + 1].value === "X") {
                minefield[roww][coll].value++;
            }
            //GOOD add one to value total if mine located below space
            if (roww < row - 1 && 
                minefield[roww + 1][coll].value === "X") {
                minefield[roww][coll].value++;
                }
            //GOOD add one to value total if mine located bottom left of space
            if (roww < row - 1 && 
                coll > 0 && 
                minefield[roww + 1][coll -1].value === "X" ) {
                    minefield[roww][coll].value++;
                }
        
            //GOOD add one to value total if mine located bottom right of space
            if (roww < row - 1 && 
                coll < column - 1 && 
                minefield[roww + 1][coll + 1].value === "X" ) {
                    minefield[roww][coll].value++;
            }
        }
    }
    return { minefield, mineLocation }
};
    

const randomNum = (min = 0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
