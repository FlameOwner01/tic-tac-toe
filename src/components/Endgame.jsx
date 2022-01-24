import { useState } from "react";

const Endgame = ({winner, newGame, history}) =>{

    const [show, setShow] = useState(false);
    
    const displayHistory = () => {  
        
        setShow(true);
      console.log(history);
    }
    
   
    return(
        <div className = "endgame">
            {
                winner === "draw" ? <h3 className="winner">{winner}!!</h3> : <h3 className="winner">You win {winner}!!</h3>
            }
            <button className="again" id = "reset" onClick={() =>{
                newGame();
            }}>Wanna try again!</button>

            <button className="again" id ="history" onClick={()=>{
                
                displayHistory();
            }}>Show history</button>
 
                <div className="endgame">
                    {
                        show ? <div>
                               history
                            </div>
                        : null
                    }
                </div>
        </div>
    )
}

export default Endgame;