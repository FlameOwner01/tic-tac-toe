import { useState, useEffect } from "react";
import o from "./images/ox.png";
import x from "./images/X.jpg";
let k = 0;

const Board = ({xIsNext, setTurns, getScore, playerOne, playerTwo, getHis, sameNewGame, setSameNewGame}) => {
    

   const [board, setBoard] = useState(Array(9).fill(null));
   const [winner, setWinner] = useState("");     
   const [firstPlayerWins, setFirstPlayerWins] = useState(0);
   const [secondPlayerWins, setSecondPlayerWins] = useState(0);
   const [draw, setDraw] = useState(0);
   const [history, setHistory] = useState([]);
   const [availabeSquares, setAvailableSquares] = useState(9)


  
let img = document.createElement("img");
let img2 = document.createElement("img");
img2.src = o;
img.src = x;



const inputMark = (n) =>{
    let element = document.getElementById(n);
   
    let boardCopy = [...board];
    if(sameNewGame){
        boardCopy = [];
        setBoard(Array(9).fill(null))
        setAvailableSquares(9);
        setSameNewGame(false);
        console.log(sameNewGame);
    }

    if(winner || boardCopy[n]){
        return;
    }

    boardCopy[n] = xIsNext ? "x": "o";
    setBoard(boardCopy);

        if(xIsNext){
                element.appendChild(img);  
                setTurns(false);
        }else{
                element.appendChild(img2);
                setTurns(false);
               
            }   
            calculateWinner(boardCopy);   
}  


   const calculateWinner = (squares) => {
    const winningCombinations =
        [[0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6], [0, 3, 6],
        [1, 4, 7], [2, 5, 8]];
   
    k++;
    for (var i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            if (squares[a] === "x") {
                setWinner(playerOne);
                setAvailableSquares(0);
                setFirstPlayerWins(firstPlayerWins + 1);
                getScore(firstPlayerWins + 1, secondPlayerWins, draw);
                setHistory([...history, {
                    id: new Date().getTime(),
                    day: new Date().getDate(),
                    month: new Date().getMonth() + 1,
                    hour: new Date().getHours(),
                    minute: new Date().getMinutes(),
                    player1: playerOne,
                    player2: playerTwo,
                    winner: playerOne
                }
                ])
                return;
            }else if(squares[a] === "o"){
                    setWinner(playerTwo);
                    setAvailableSquares(0);
                    setSecondPlayerWins(secondPlayerWins+1)
                    getScore(firstPlayerWins, secondPlayerWins + 1, draw);
                    setHistory([...history, {
                        id: new Date().getTime(),
                        day: new Date().getDate(),
                        month: new Date().getMonth() + 1,
                        hour: new Date().getHours(),
                        minute: new Date().getMinutes(),
                        player1: playerOne,
                        player2: playerTwo,
                        winner: playerTwo
                    }
                    ])
                    return;
              }
        }
      }
      if(k === 9){
            setWinner("draw");
            setAvailableSquares(0);
            setDraw(draw+1);
            getScore(firstPlayerWins, secondPlayerWins, draw+1);
            setHistory([...history, {
                id: new Date().getTime(),
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                player1: playerOne,
                player2: playerTwo,
                winner: "draw"
            }
            ])
            return;
          }
      
    }
    
    useEffect(() =>{
        if(sameNewGame || availabeSquares === 0){
            for(let j = 0; j < 9; j++){
                let element = document.getElementById(j);
                element.value = null;
                element.innerHTML = null;
                console.log("cleared");
            }
            k = 0;
            setAvailableSquares(9);
            setWinner("");
            setTurns(true);
        }
    }, [sameNewGame]);

      useEffect(() => {
        getHis(history);
        localStorage.setItem("history", JSON.stringify(history));
     }, [history]);
        

    
return(
    <div className="game">
        <table className="table">
            <tbody>
            <tr>
                <th onClick={() =>{
                    inputMark(0);
                    
                }} id="0"></th>
                <th onClick={() =>{
                    inputMark(1);
                    
                }} id="1"></th>
                <th onClick={() =>{
                    inputMark(2);
                    
                }} id="2"></th>
            </tr>
            
            <tr>
                <th onClick={() =>{
                    inputMark(3);
                    
                }} id="3"></th>
                <th onClick={() =>{
                    inputMark(4);
                    
                }} id="4"></th>
                <th onClick={() =>{
                    inputMark(5);
                    
                }} id="5"></th>
            </tr>
            
            <tr>
                <th onClick={() =>{
                    inputMark(6);
                    
                }} id="6"></th>
                <th onClick={() =>{
                    inputMark(7);
                    
                }} id="7"></th>
                <th onClick={() =>{
                    inputMark(8);
                    
                }} id="8"></th>
            </tr>
            </tbody>
        </table>
       
    </div>  
)
}


export default Board;