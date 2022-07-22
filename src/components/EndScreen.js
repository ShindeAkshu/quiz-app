import React, { useContext } from "react";
import {QuizContext} from "../Helpers/Context";
import "../app.css";
import {Questions} from "../Helpers/QuestionBank";

function EndScreen () {
    const {score,setScore,setGameState,userName} =useContext(QuizContext);

    const reStartQuiz = ()=>{
        setScore(0);
        setGameState("menu");
    };

    return(
        <div className="EndScreen">
            <h1>Completed</h1>
            <h3>{userName}</h3>
            <h3>
                {score} / {Questions.length} 
            </h3>
            <button onClick = {reStartQuiz}>Restart Quiz</button>
        </div>

    );
};

export default EndScreen;