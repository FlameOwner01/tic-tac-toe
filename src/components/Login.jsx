

const Login = ({gettingPlayers, login, triggerLogin}) => {
   


    const renderInput = () => {
        var temp1 = document.getElementById("input1").value;
        var temp2 = document.getElementById("input2").value;
        var isEmpty = false;
        
        
        if(temp1 ===""){
            document.getElementById("input1").value = "Can't be empty!";
            isEmpty = true;
        }
        if(temp2 === ""){
            document.getElementById("input2").value = "Can't be empty!";
            isEmpty = true;
        }
    
        if(isEmpty) {
             return; 
        }else{
            gettingPlayers(temp1, temp2);           
            triggerLogin();
        }
    
    }

    return(

        <div className="all">
            {
                login ? null
                    : <div className="container"><h2>Player 1</h2>
                    <input type="text" id="input1" className="input" />
                    <h2>Player 2</h2>
                    <input type="text" id="input2" className="input" />
                    <button className="btn" onClick ={() =>{
                        renderInput();
                        }}>Start</button></div>
            }
              
        
        
        </div>
    )
}


export default Login;

