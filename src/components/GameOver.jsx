export default function GameOver({ winner, onReset }) {

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>It&apos;s a draw</p>}
            <p><button onClick={onReset} >Play Again?</button></p>
        </div>
    );
}