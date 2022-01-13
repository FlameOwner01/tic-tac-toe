import Login from "./components/Login.jsx";
import Game from "./components/Game.jsx";
import "./styles/style.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Endgame from "./components/Endgame.jsx";

const history = [];

function App() {

  const [login, setLogin] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [draw, setDraw] = useState(0);
  const [end, setEnd] = useState(false);
  const [winner, setWinner] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [resetStatus, setResetStatus] = useState(false);
  const [currentGame, setCurrentGame] = useState([]);


const triggerLogin = () =>{
    setLogin(true);
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
  
    setCurrentGame(currentGame => [...currentGame, 
    Month,
    Day,
    Hours,
    Minutes
    ] );
    
   }

const gettingPlayers = (temp1, temp2) => {
    setPlayerOne(temp1);
    setPlayerTwo(temp2);
    setCurrentGame(currentGame => [...currentGame, 
     temp1,
     temp2
      ] )
     
   }




const getScore = (score) =>{
      if(score === "1"){
       setPlayer1(player1+1);
       setWinner(playerOne);
       
      }else if(score === "2"){
       setPlayer2(player2+1);
       setWinner(playerTwo);
     
      }else{
       setDraw(draw+1);
       setWinner("draw");
     }
      
     setLogin(false);
     setShowLogin(false);
     setEnd(true);
     
   }

   useEffect(() => {
     if(winner !== ""){
      setCurrentGame(currentGame => [...currentGame, 
        winner
         ] )
     }
     
     
   
}, [winner])
  

const showHistory =() =>{
  history.push(currentGame);
  setCurrentGame([]);

localStorage.setItem('history', history);
console.log("history: ", history);
   }
  
const reset = () =>{
    setResetStatus(true);
    setEnd(false);
    setShowLogin(false);
    setLogin(true);
  
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
         showLogin ? <Login login={login} triggerLogin={triggerLogin} gettingPlayers={gettingPlayers} /> : null
        }
          {
          login ? <Game
           playerOne={playerOne} 
           playerTwo={playerTwo}
           getScore={getScore}
           resetStatus = {resetStatus}
           setResetStatus={setResetStatus}/> : null 
        }
        {
          end ? <Endgame
          winner = {winner}
          reset={reset}
          showHistory={showHistory}
          history={history}
          currentGame={currentGame}
          setCurrentGame = {setCurrentGame}
          /> 
          : null
        }
    </div>
  );
}

export default App;
