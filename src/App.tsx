import "./App.css";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <section className="page-entiere">
        <section className="titre-jeu">
          <h2>Même dans le flou, je vois bien que t'es pas net!</h2>
        </section>
        <section className="play">
          <button className="press-play">PLAY </button>
        </section>
        <section className="jeu">
          <Game />
        </section>
        <section className="explication">
          <p>
            Bienvenue au bal ! <br></br> Il n'y a pas vraiment de règles ! Tu
            vas devoir retrouver l'intru qui se cache parmis les invités.
            Attention à ne pas sortir des invités VIP du jeu sinon, les vigils
            te sortiront de la pièce, et tu n'auras plus qu'à rentrer chez
            toi...
          </p>
          <img
            src="/personnages/man-rule.png"
            alt="Man"
            className="homme-explication"
          />
        </section>
      </section>
    </>
  );
}

export default App;
