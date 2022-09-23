import React, { useState, useEffect } from "react";
import { boardBuilder } from "../utilies/boardBuilder";
import '../App.css';

export const Board = () => {
    const [grid, setGrid] = useState([]);

    useEffect (() => {
        const newMineField = () => {
            const newBoard = boardBuilder(5, 9, 2);
            console.log(newBoard);
            setGrid(newBoard);
        }
        newMineField();
    }, []);

    if (!grid.minefield) {
        return <div>Mine Field Loading...</div>;
    }
    return grid.minefield.map((singleRow) => {
        return (
            <>
            <div id = "boardDisplay">
                {singleRow.map((singleBlock) => {
                    return <div> { singleBlock.value } </div>;
        })}   
            </div>
            </>
        )
        });
    };
        

 
/*
const randomNum = (min =0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/

