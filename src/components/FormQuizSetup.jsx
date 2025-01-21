import React from "react";

function FormSetupQuiz(props) {
    return (<div>
        <form>
            <input type="text" placeholder="Dummy text field for later"/>
            <button type="button" onClick={() => {props.onSubmit({start: true})}}>Start Quiz</button>
        </form>
    </div>) // create form to setup quiz, connect with Quiz.jsx,
                         // start quiz only on form submit
}

export default FormSetupQuiz;