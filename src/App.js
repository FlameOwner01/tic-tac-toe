import Login from "./components/Login.jsx";
import Game from "./components/Game.jsx";
import "./styles/style.css";
import { useState } from "react";
import Endgame from "./components/Endgame.jsx";


function App() {

  const [game, setGame] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [end, setEnd] = useState(false);
  const [winner, setWinner] = useState("");
  let history = [];
  

  const triggerLogin = () =>{
    setGame(true);
    setShowLogin(false);
   }

  const gettingPlayers = (temp1, temp2) => {
    setPlayerOne(temp1);
    setPlayerTwo(temp2);
    setGame(true);
   }

   const setScore = (score) =>{
     if(score === "1"){
       console.log("playerOne: ", playerOne);
       setWinner(playerOne);
       console.log("winner: ",winner);
     }else if(score === "2"){
       setWinner(playerTwo);
     }else{
       setWinner("draw");
     }
    
     setEnd(true);
   
   }
   const getHs = (hs) =>{
     history = hs;
   }
  
   const reset = () =>{
    setEnd(true);
    setGame(false);
    	
  } 
  const newGame = () =>{
    setGame(true);
    setEnd(false);
  }
  
  return (
    <div>
         
        {
         showLogin ? <Login game={game} triggerLogin={triggerLogin} gettingPlayers={gettingPlayers} /> : null
        }
          {
          game ? <Game
           playerOne={playerOne} 
           playerTwo={playerTwo}
           winner={winner}
           setScore={setScore}
           reset={reset}đ
           getHs={getHs}
           /> : null 
        }
        {
          end ? <Endgame
          	winner={winner}
            newGame={newGame}
            history={history}
          /> : null
        }
    </div>
  )
}

export default App;
