 
import './App.css';
import React from 'react';
import { useState } from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen'
import {QuizContext} from './Helpers/Context'

function App() {
const[gameState,setGameState] =useState("menu");
const[userName,setUserName]=useState("");
const[score,setScore]=useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value ={{gameState,setGameState,userName,setUserName,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "playing" && <Quiz/>}
      {gameState === "finished" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
