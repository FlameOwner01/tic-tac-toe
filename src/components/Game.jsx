import Board from "./Board.jsx";
import { useState } from "react";


const Game = ({playerOne, playerTwo, getScore, resetStatus }) => {

    const [turn, setTurn] = useState(1);
   

    const setTurns = (turns) =>{
        if(turns === 1){
            setTurn(2);
        }else{
            setTurn(1);
        }
    }
    
    const setScore = (score) => {
        getScore(score);
    }
   

    return(
    <div>
        {
            turn === 1 ? <h3 className = "heading" >It's {playerOne}'s turn</h3> : <h3 className = "heading" >It's {playerTwo}'s turn</h3>
        }
            <Board
            setTurns = {setTurns}
            turn={turn}
            setScore={setScore}
            resetStatus={resetStatus}
            
            />

        
    </div>
      
    )
}

export default Game;