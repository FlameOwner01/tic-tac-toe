import { useState } from "react";

const Endgame = ({winner, reset}) =>{
  
    

    const [show, setShow] = useState(false);
    

    
    const displayHistory = () => {  
        
        setShow(true);
      
    }
    
 

   
    return(
        <div className = "endgame">
            {
                winner === "draw" ? <h3 className="winner">{winner}!!</h3> : <h3 className="winner">You win {winner}!!</h3>
            }
            <button className="again" id = "reset" onClick={() =>{
                reset();
            }}>Wanna try again!</button>

            <button className="again" id ="history" onClick={()=>{
                
                displayHistory();
            }}>Show history</button>
 
                <div className="endgame">
                    {
                        show ? 
                                <div>
                                    History
                                </div>
                        : null
                    }
                </div>
        </div>
    )
}

export default Endgame;