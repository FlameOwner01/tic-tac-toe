import { useState, useEffect } from "react";
import o from "./images/ox.png";
import x from "./images/X.jpg";


const Board = ({turn, setTurns, getScore, resetStatus}) => {
    
    const [tableO, setTableO] = useState([]);
    const [tableX, setTableX] = useState([]);
    const [full, setFull] = useState(false);


let img = document.createElement("img");
let img2 = document.createElement("img");
img2.src = o;
img.src = x;

var winpl1, winpl2 = false;
var tempArray = [];


const inputMark = (n) =>{
    let element = document.getElementById(n);

    if(!(winpl1 || winpl2 || full)){
        if(turn === 1){
            if(element.value  ==="occupied"){
                alert("This place is already occupied");
            }else{
                element.appendChild(img);
                setTableX(tableX => [...tableX, n]);
                element.value = "occupied";
                setTurns(1);
            }
        }else{
            if(element.value  ==="occupied"){
                alert("This place is already occupied");
            }else{
                element.appendChild(img2);
                setTableO(tableO => [...tableO, n]);
                element.value = "occupied";
                setTurns(2);
            }   
        }
    }else{
        
        return;
    }
    
    
    itsFull();
   
}

const itsFull = () =>{
    
    for(let i = 1; i< 10; i++){
        let el = document.getElementById(i);
       if(el.value === "occupied"){
           tempArray.push(i);
       }
    }
    if(tempArray.length === 9){
        setFull(true);
    }
}

        if(tableO.includes(1) && tableO.includes(2) && tableO.includes(3)){
            winpl2 = true;
        }else if(tableO.includes(4) && tableO.includes(5) && tableO.includes(6)){
            winpl2 = true;
        }else if(tableO.includes(7) && tableO.includes(8) && tableO.includes(9)){
            winpl2 = true;
        }else if(tableO.includes(1) && tableO.includes(5) && tableO.includes(9)){
            winpl2 = true;
        }else if(tableO.includes(3) && tableO.includes(5) && tableO.includes(7)){
            winpl2 = true;
        }else if(tableO.includes(1) && tableO.includes(4) && tableO.includes(7)){
            winpl2=true;
        }else if(tableO.includes(2) && tableO.includes(5) && tableO.includes(8)){
            winpl2 = true;
        }else if(tableO.includes(3) && tableO.includes(6) && tableO.includes(9)){
            winpl2 = true;
        }

        if(tableX.includes(1) && tableX.includes(2) && tableX.includes(3)){
            winpl1 = true;
        }else if(tableX.includes(4) && tableX.includes(5) && tableX.includes(6)){
            winpl1 = true;
        }else if(tableX.includes(7) && tableX.includes(8) && tableX.includes(9)){
            winpl1 = true;
        }else if(tableX.includes(1) && tableX.includes(5) && tableX.includes(9)){
            winpl1 = true;
        }else if(tableX.includes(3) && tableX.includes(5) && tableX.includes(7)){
            winpl1 = true;
        }else if(tableX.includes(1) && tableX.includes(4) && tableX.includes(7)){
            winpl1=true;
        }else if(tableX.includes(2) && tableX.includes(5) && tableX.includes(8)){
            winpl1 = true;
        }else if(tableX.includes(3) && tableX.includes(6) && tableX.includes(9)){
            winpl1 = true;
        }

        useEffect(() =>{
            if(full || winpl1 || winpl2){
                if(winpl1){
                  getScore("1");
                  
                }else if(winpl2){
                    getScore("2");
                   
                }else{
                   getScore("3");
                   
                }
            }
        }, [full, winpl1, winpl2])

      const reset = () =>{
        if(resetStatus){
            for(let i = 0; i < tableO.length + tableX.length; i++ ){
                document.getElementById(i).value = null;
                document.getElementById(i).innerHTML = null;
            }
            
        }
      }
          
       
      
        

    
return(
    <div className="game">
        <table className="table">
            <tbody>
            <tr>
                <th onClick={() =>{
                    inputMark(1);
                    
                }} id="1"></th>
                <th onClick={() =>{
                    inputMark(2);
                    
                }} id="2"></th>
                <th onClick={() =>{
                    inputMark(3);
                    
                }} id="3"></th>
            </tr>
            
            <tr>
                <th onClick={() =>{
                    inputMark(4);
                    
                }} id="4"></th>
                <th onClick={() =>{
                    inputMark(5);
                    
                }} id="5"></th>
                <th onClick={() =>{
                    inputMark(6);
                    
                }} id="6"></th>
            </tr>
            
            <tr>
                <th onClick={() =>{
                    inputMark(7);
                    
                }} id="7"></th>
                <th onClick={() =>{
                    inputMark(8);
                    
                }} id="8"></th>
                <th onClick={() =>{
                    inputMark(9);
                    
                }} id="9"></th>
            </tr>
            </tbody>
        </table>
       
    </div>  
)
}


export default Board;