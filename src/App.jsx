import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "../../U3-W1-D1/src/Button";
import Immagine from "../../U3-W1-D1/src/Immagine";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Benvenuto!</h1>
      <Button text="cliccami" />
      <Immagine src="https://via.placeholder.com/150" alt="ciaone" />
    </>
  );
}

export default App;
