import React, { useEffect, useState } from "react";
import Square from "../square";

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(square);

  const getWinner = (square) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus(`This is a draw! restart the game`);
    } else if (getWinner(square)) {
      setStatus(`The winner is: ${getWinner(square)}`);
    } else {
      setStatus(`Next Player is: ${isXTurn ? "X" : "O"}`);
    }
  }, [square, isXTurn]);

  const handleSquare = (getSquareCurrentIndex) => {
    let cpySquares = [...square];
    if (getWinner(cpySquares) || cpySquares[getSquareCurrentIndex]) {
      return;
    }
    cpySquares[getSquareCurrentIndex] = isXTurn ? "X" : "O";
    setSquare(cpySquares);
    setIsXTurn(!isXTurn);
  };

  const handleButtonRestart = () => {
    setIsXTurn(true);
    setSquare(Array(9).fill(""));
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Square value={square[0]} onHandleSquareClick={() => handleSquare(0)} />
        <Square value={square[1]} onHandleSquareClick={() => handleSquare(1)} />
        <Square value={square[2]} onHandleSquareClick={() => handleSquare(2)} />
      </div>
      <div className="flex gap-2">
        <Square value={square[3]} onHandleSquareClick={() => handleSquare(3)} />
        <Square value={square[4]} onHandleSquareClick={() => handleSquare(4)} />
        <Square value={square[5]} onHandleSquareClick={() => handleSquare(5)} />
      </div>
      <div className="flex gap-2">
        <Square value={square[6]} onHandleSquareClick={() => handleSquare(6)} />
        <Square value={square[7]} onHandleSquareClick={() => handleSquare(7)} />
        <Square value={square[8]} onHandleSquareClick={() => handleSquare(8)} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-3xl">{status}</h1>
        <button
          className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-xl"
          onClick={handleButtonRestart}
        >
          Restart The Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
