import { useState } from "react";

const Endgame = ({winner, reset, showHistory, history}) =>{
  
    

    const [show, setShow] = useState(false);
    let currentHS = [];
    let i = 0;


    
    const displayHistory = () => {  
        
            currentHS.push(history[i]);
        
        setShow(true);
        console.log(history.length);
        console.log("currentHistory: ", currentHS);
        i++;
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
                showHistory();
                displayHistory();
            }}>Show history</button>
 
                <div className="endgame">
                    {
                        show ? 
                                <div>
                                {currentHS[3]}.{currentHS[2]}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {currentHS[4]}: {currentHS[5]}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {currentHS[0]} vs {currentHS[1]}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {currentHS[6]} Won!
                                </div>
                        : null
                    }
                </div>
        </div>
    )
}

export default Endgame;