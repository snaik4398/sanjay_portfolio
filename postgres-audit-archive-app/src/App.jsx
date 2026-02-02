import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <label className="text-3xl ">
        Table name : <input  name="tableName" /> <br/>
      Table script : <br/><input className="size-48 "  name="tableName" />
      </label>
      {/* <hr /> */}

    </>
  );
}

export default App;
