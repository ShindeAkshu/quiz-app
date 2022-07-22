import React, { useContext } from 'react';
import{QuizContext} from "../Helpers/Context"
import {useState} from 'react';
import '../App.css';
import {QuizContext} from "../Helpers/Context"

function MainMenu () {
    const{ gameState,setGameState,userName,setUserName}=useContext(QuizContext);
    return(
        <div className='menu'>
            <label>Enter Your Name :</label>
            <input type="text" placeholder='Enter your name..'
            onChange={(event)=>{setUserName (event.target.value);
            }}>
                
            </input>
            <button onClick={()=>{
                setGameState("quiz");
            }}>Start Quiz</button>
          
        </div>
    );
}

export default MainMenu;