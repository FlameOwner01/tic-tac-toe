import Board from "./Board.jsx";
import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";




const Game = ({playerOne, playerTwo, winner, setWinner, setScore,reset }) => {
  	
      const [turn, setTurn] = useState(1);
      const [resetStatus, setResetStatus] = useState(false);
      const [history, setHistory] = useState([]);
      const [player1, setPlayer1] = useState(0);
      const [player2, setPlayer2] = useState(0);
      const [draw, setDraw] = useState(0);
    
      let date = new Date();
      let Month = date.getMonth()+1;
      let Day = date.getDate();
      let Hours = date.getHours();
      let Minutes = date.getMinutes();

     
    if(Minutes < 10){
      Minutes = "0" +  Minutes;
    }
    
    if(Day < 10){
      Day = "0" +  Day;
    }
    if(Month < 10){
      Month = "0" +  Month;
    }



    const setTurns = (e) =>{
      if(e === 1){
        setTurn(1);
        
      }else{
        setTurn(2);
      }
    }
  
   
const getScore = (score) =>{
  
  setScore();
    if(score === "1"){
      setWinner(playerOne);
      setPlayer1(player1+1);
      setResetStatus(true);
      reset();
    }else if(score === "2"){
      setWinner(playerTwo);
      setPlayer2(player2+1);
      setResetStatus(true);
      reset();
    }else if (score === "3"){
      setWinner("draw");
      setDraw(draw+1);
      setResetStatus(true);
      reset();
    }
  
}

    const historySetter = () =>{
      console.log("Day: ",Day );
      setHistory([...history, {
        id: date.getTime(),
        day: Day,
        month: Month,
        hours: Hours,
        minute: Minutes,
        pl1: playerOne,
        pl2: playerTwo,
        whoWon: winner
     }])
      console.log(history);
    }
     

     useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
     }, [history])


   
    

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
            historySetter={historySetter}
            />    
    </div>
      
    )
}

export default Game;