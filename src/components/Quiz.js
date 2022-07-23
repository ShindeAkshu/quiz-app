import React from "react";
import '../App.css';
import {useState,useContext} from 'react';
import { Questions } from "../Helpers/QuestionBank";
import{QuizContext} from "../Helpers/Context"


function Quiz () {
  const{score,setScore,gameState,setGameState} = useContext(QuizContext);

  const[currQuestion,setCurrQuestion] = useState(0);
  const[optionChosen,setOptionChosen] =useState("");

  const nextQuestion = () =>{
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1);
  };

  const finishQuiz  = () =>{
    if (Questions[currQuestion].answer == optionChosen){
      setScore(score+1);
    }
    setGameState("EndScreen");
  }

return(

    <div className="quiz">
    <h1>{Questions[currQuestion].prompt}</h1>
    <div className="option">
    <button onChange={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
    <button onChange={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
    <button onChange={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
    <button onChange={()=>setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
   </div>

   {currQuestion == Questions.length-1 ? (
    <button onClick={finishQuiz}>Finish Quiz</button>
   ):(
   <button onClick = {nextQuestion}>Next QuestionBank</button>

   )}
    </div>
    );
};

export default Quiz;
