import React, { useState } from "react";
import Square from "../square";

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(square);

  const handleSquare = (getSquareCurrentIndex) => {
    let cpySquares = [...square];
    if (cpySquares[getSquareCurrentIndex]) {
      return;
    }
    cpySquares[getSquareCurrentIndex] = isXTurn ? "X" : "O";
    setSquare(cpySquares);
    setIsXTurn(!isXTurn);
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
    </div>
  );
};

export default TicTacToe;
