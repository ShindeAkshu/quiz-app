import React from "react";
import {useState} from 'react';
import {Questions} from "./Helpers/QuestionBank";


function Quiz () {
  const[currQuestion,setCurrQuestion] = useState(0);
  const[optionChosen,setOptionChosen] =useState("");

return(

    <div className="quiz">
  <h1>{Questions[currQuestion].prompt}</h1>
  <div className="option">
    <button>{Questions[currQuestion].optionA}</button>
    <button>{Questions[currQuestion].optionB}</button>
    <button>{Questions[currQuestion].optionC}</button>
    <button>{Questions[currQuestion].optionD}</button>
   </div>
   <button>Next QuestionBank</button>
    </div>
    );
};

export default Quiz;
