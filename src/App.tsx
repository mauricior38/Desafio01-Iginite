import { useState } from "react";
import "./global.css";
import styles from "./App.module.css";

import Tasks from "./components/Tasks";

import Logo from "./assets/Logo.png";

const tasks = [
  { id: 1, content: "Lavar o rosto", status: false },
  { id: 2, content: "limpar o carro", status: false },
  { id: 3, content: "Arrumar a cama", status: false },
];

function App() {

  return (
    <>
      <header className={styles.top}>
        <img src={Logo} />
      </header>

      <Tasks tasks={tasks} />;
    </>
  );
}

export default App;
