import Board from "./Board.jsx";
import { useState } from "react";
import Navbar from "./Navbar.jsx";


const Game = ({playerOne, playerTwo, setScore, getHs, sameNewGame, setSameNewGame }) => {
  	
  const [xIsNext, setXisNext] = useState(true);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [draw, setDraw] = useState(0);
    const setTurns = (is) =>{
        
        if(is){
          setXisNext(true);
        }else{
          setXisNext(!xIsNext);
        }
    }
  
   
const getScore = (pl1, pl2, tie) =>{
  setPlayer1(pl1);
  setPlayer2(pl2);
  setDraw(tie);
  setScore();
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
            xIsNext ? <h3 className = "heading" >It's {playerOne}'s turn</h3> : <h3 className = "heading" >It's {playerTwo}'s turn</h3>
        }

          <Board
            xIsNext={xIsNext}
            setTurns={setTurns}
            getScore={getScore}
            playerOne={playerOne}
            playerTwo={playerTwo}
            getHis={getHis}
            sameNewGame={sameNewGame}
            setSameNewGame = {setSameNewGame}
            />    
    </div>
      
    )
}

export default Game;