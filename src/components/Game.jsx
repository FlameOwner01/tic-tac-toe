import Board from "./Board.jsx";
import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";


const Game = ({playerOne, playerTwo, winner, setScore, reset, getHs }) => {
  	
      const [turn, setTurn] = useState(1);
      const [resetStatus, setResetStatus] = useState(false);
      const [player1, setPlayer1] = useState(0);
      const [player2, setPlayer2] = useState(0);
      const [draw, setDraw] = useState(0);

    const setTurns = (e) =>{
      if(e === 1){
        setTurn(1);
        
      }else{
        setTurn(2);
      }
    }
  
   
const getScore = (score) =>{

    if(score === "1"){
      setScore(score);
      setPlayer1(player1+1);
      setResetStatus(true);
      reset();
    }else if(score === "2"){
      setScore(score);
      setPlayer2(player2+1);
      setResetStatus(true);
      reset();
    }else if (score === "3"){
      setScore(score);
      setDraw(draw+1);
      setResetStatus(true);
      reset();
    }

}

    const getHis = (history) =>{
      getHs(history);
    }
    return (
    <div>
        <nav className="Navigation">
            <Navbar 
            playerOne = {playerOne}
            playerTwo = {playerTwo}
            player1={player1}
            player2={player2}
            draw={draw}
            />
        </nav>
        {
            turn === 1 ? <h3 className = "heading" >It's {playerOne}'s turn</h3> : <h3 className = "heading" >It's {playerTwo}'s turn</h3>
        }

          <Board
            turn={turn}
            setTurns={setTurns}
            getScore={getScore}
            resetStatus = {resetStatus}
            playerOne={playerOne}
            playerTwo={playerTwo}
            winner={winner}
            getHis={getHis}
            />    
    </div>
      
    )
}

export default Game;