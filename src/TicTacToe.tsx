import { useState } from "react";

export const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');
    const Cell = ({ num }: any) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    }

    const checkForWinner = (squares: any) => {
        let combos: any = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }
        for (let combo in combos) {
            combos[combo].forEach((pattern: any) => {

                if (
                    squares[pattern[0]] === "" ||
                    squares[pattern[1]] === "" ||
                    squares[pattern[2]] === ""
                ) { } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    console.log(squares, pattern[0], pattern[1], pattern[2]);

                    setWinner(squares[pattern[0]]);

                }

            })
        }
    }

    const handleRestart = () => {
        setWinner('');
        setCells(Array(9).fill(''));
    }

    const handleClick = (num: any) => {
        let squares = [...cells];
        if (cells[num] !== "") {
            alert('Already Clicked!');
            return;
        }
        if (turn == 'X') {
            squares[num] = 'X';
            setTurn('O');
        }
        else {
            squares[num] = 'O';
            setTurn('X');
        }
        checkForWinner(squares);
        setCells(squares);
    }
    return (

        <div className="container">
            <h1>Turn {turn}</h1>
            <table>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </tr>
            </table>
            {winner && (
                <>
                    <h1>Winner {winner}</h1>
                    <button onClick={() => handleRestart()}> Play Again</button>
                </>
            )}

        </div>
    )
}