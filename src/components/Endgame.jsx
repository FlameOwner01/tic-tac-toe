import { useState } from "react";

const Endgame = ({ newSameGame, history, newGame}) =>{

    const [show, setShow] = useState(false);

    const displayHistory = () => {  
        setShow(true);
    }
    
   
    return(
        <div>
        <div className = "endgame">
            {
               history[0]  === "draw" ? <h3 className="winner">!!</h3> : <h3 className="winner">You win !!</h3>
            }
            <button className="again" id = "reset" onClick={() =>{
                newSameGame();
            }}>Wanna try again!</button>

            <button className="again" id ="history" onClick={()=>{
                
                displayHistory();
            }}>Show history</button>
             <button className="again" id = "reset" onClick={() =>{
                newGame();
            }}>New Game</button>
            
        </div>
        <div className="endgame1" id="hs">
                    
                
        {
            show ? 
              history.map(({day, hour,id, minute,month, player1, player2, winner}) =>{
                  return (<div key ={id}>{month}.{day}  {hour}.{minute}  {player1}  vs  {player2}  {winner} is Winner!</div>
                    )
              })  
            : null
        }
        </div>

        </div>
       
    )
}

export default Endgame;