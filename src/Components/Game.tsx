import "./Game.css"


function Game() {
    return (
      <>
        <section className="jeu">
          <img
            src="/personnages/femme.png"
            id="character1"
            className="player-femme"
            alt="femme"
          ></img>
          <img
            src="/personnages/homme.png"
            id="character2"
            className="player-homme"
            alt="homme"
          ></img>
        </section>
      </>
    );
}

export default Game;