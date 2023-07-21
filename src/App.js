import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Configure from "./components/Configure";
import SSODemo from "./components/SSODemo";

function App() {
  console.log("app start >>>>");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Testing SSO Demo</h1>} />
        <Route path="configure" element={<Configure />} />
        <Route path="ssoDemo" element={<SSODemo />} />
      </Routes>
    </div>
  );
}

export default App;
