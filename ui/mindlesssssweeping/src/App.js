import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Board } from './components/Board'

function App() {
  return (
    <>
    <div id = 'boardHeader'>
    <h1> MINDSWEEPER </h1>
    <h3> Sweeping Minds Since Windows 3.1 (1992) </h3>
    </div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Board />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
