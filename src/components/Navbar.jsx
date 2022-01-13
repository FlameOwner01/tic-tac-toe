

const Navbar = ({playerOne, playerTwo, player1, player2, draw}) =>{


    return(
        <div className="contain">
            <h1>Tic Tac Toe</h1>
            <h1>{playerOne}: {player1}</h1>
            <h1>{playerTwo}: {player2}</h1>
            <h1>Draw: {draw}</h1>
        </div>
    )
}


export default Navbar;