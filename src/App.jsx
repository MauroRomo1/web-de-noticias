import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <header>
        <Titulo />
      </header>
      <main>
        <h2>contendio main</h2>
      </main>
      <footer>
        <h6 className="text-center my-3">
          &copy; Todos los derechos reservados
        </h6>
      </footer>
    </>
  );
}

export default App;
