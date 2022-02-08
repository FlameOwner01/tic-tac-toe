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
  const [history, setHistory] = useState([]);
  const [sameNewGame, setSameNewGame] = useState(false);

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

   const getHs = (hs) =>{
     setHistory([...hs]);
   }
  
   
  const newSameGame = () =>{
    setSameNewGame(true);
    setGame(true);
    setEnd(false);
  }
  const newGame = () =>{
    setSameNewGame(true);
    setGame(false);
    setEnd(false);
    setShowLogin(true);
    setPlayerOne("");
    setPlayerTwo("");
    setHistory([]);
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
           setScore={setScore}
           getHs={getHs}
           sameNewGame={sameNewGame}
           setSameNewGame ={setSameNewGame}
           /> : null 
        }
        {
          end ? <Endgame
            newSameGame={newSameGame}
            history={history}
            newGame={newGame}
          /> : null
        }
    </div>
  )
}

export default App;
