import React, { useContext } from "react";
import {QuizContext} from "../Helpers/Context";
import "../app.css";
import {Questions} from "../Helpers/QuestionBank";

function EndScreen () {
    const {score,setScore,setGameState} =useContext(QuizContext);

    return(
        <div className="EndScreen">
            <h1>Completed</h1>
            <h3>
                {score} / {Questions.length} { " "}
            </h3>
            <button>Restart Quiz</button>
        </div>

    );
};

export default EndScreen;