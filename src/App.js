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
  

  const triggerLogin = () =>{
    setGame(true);
    setShowLogin(false);
   }

  const gettingPlayers = (temp1, temp2) => {
    setPlayerOne(temp1);
    setPlayerTwo(temp2);
    setGame(true);
   }

   const setScore = () =>{
     setEnd(true);
   
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
           setWinner={setWinner}
           setScore={setScore}
           reset={reset}
           /> : null 
        }
        {
          end ? <Endgame
          	winner={winner}
            newGame={newGame}
          /> : null
        }
    </div>
  )
}

export default App;
