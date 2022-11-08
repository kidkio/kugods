import { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer/>}
      <h1 id="timer">0</h1>
      <button onClick={() => {setShowTimer(!showTimer)}}>타이머 토글</button>
    </div>
  );
}

export default App;
