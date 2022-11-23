import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Page1 from "./routes/Page1";
import Home from "./routes/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/page1" element={<Page1/>}/>
    </Routes>
  );
}

export default App;
