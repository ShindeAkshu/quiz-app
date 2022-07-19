 
import './App.css';
import React from 'react';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen'
import {QuizContext} from './Helpers/Context'

function App() {
const[gameState,setGameState] =useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
    </div>
  );
}

export default App;
