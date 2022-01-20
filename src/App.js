import Login from "./components/Login.jsx";
import Game from "./components/Game.jsx";
import "./styles/style.css";
import { useState } from "react";
import Endgame from "./components/Endgame.jsx";


function App() {

  const [login, setLogin] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [end, setEnd] = useState(false);
  const [winner, setWinner] = useState("");
  

  const triggerLogin = () =>{
    setLogin(true);
    setShowLogin(false);
   }

  const gettingPlayers = (temp1, temp2) => {
    setPlayerOne(temp1);
    setPlayerTwo(temp2);
    setLogin(true);
   }

   const setScore = () =>{
     setEnd(true);
     setLogin(false)
   }

   const reset = () =>{
    setEnd(false);
    setLogin(true);
  } 
  
  return (
    <div>
         
        {
         showLogin ? <Login login={login} triggerLogin={triggerLogin} gettingPlayers={gettingPlayers} /> : null
        }
          {
          login ? <Game
           playerOne={playerOne} 
           playerTwo={playerTwo}
           winner={winner}
           setWinner={setWinner}
           setScore={setScore}
           /> : null 
        }
        {
          end ? <Endgame
          	winner={winner}
            reset={reset}
          /> : null
        }
    </div>
  )
}

export default App;
