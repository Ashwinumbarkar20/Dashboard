import { useState } from "react";

import "./App.css";
import Navbar from "./Componenets/Navbar/Navbar";
import Sidebar from "./Componenets/Sidebar/Sidebar";
import Content from "./Componenets/Content/Content";

function App() {
  return (
    <>
      <Navbar />
      <div className="Main-Section">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
