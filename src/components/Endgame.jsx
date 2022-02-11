import { useState } from "react";

const Endgame = ({ newSameGame, history, newGame}) =>{

    const [show, setShow] = useState(false);
    let Winner = "";
    history.map(({winner})=> Winner = winner);
    
    const displayHistory = () => {  
        setShow(true);
    }
    
   
    return(
        <div>
        <div className = "endgame">
            {
              Winner  === "draw" ? <h3 className="winner">Draw!!</h3> : <h3 className="winner">You win {Winner}!!</h3>
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
        
        {
            show?
            <div className="endgame1" id="hs">
                    
                
                    {
                        show ? 
                          history.map(({day, hour,id, minute,month, player1, player2, winner}) =>{
                              Winner = winner;
                              if (winner !== "draw"){
                                  Winner = winner + " Won!";
                              } 
                              return (<div key ={id}>{month}.{day}  {hour}.{minute}  {player1}  vs  {player2}  {Winner}</div>
                                )
                          })  
                        : null
                    }
                    </div>
            : null
            
        }
        
        </div>
       
    )
}

export default Endgame;