import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header className="header">
        <h1>Próximo Feriado</h1>
        <p>Feariados nacionais do Brasil</p>
      </header>
    </main>
  );
}

export default App;
