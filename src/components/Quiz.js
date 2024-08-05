import React, { useState } from 'react'
import {QuizData} from '../Data/QuizData'
import QuizResult from './QuizResult'


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const changeQuestion = () => {
        updateScore()
        if(currentQuestion<QuizData.length-1) {
            setCurrentQuestion(currentQuestion + 1)
            setClickedOption(0)
        }
        else {
            setShowResult(true)
        }
    }

    const updateScore = () => {
        if(clickedOption === QuizData[currentQuestion].answer) {
            setScore(score+1)
        }
    }

   return(
    <div>
        <p className='heading-txt'>Quiz App</p>
        <div className='container'>
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} />
            ): (
                <>
            <div className='question'>
                    <span id='question-number'>{currentQuestion+1}.</span>
                    <span id='question-text'>{QuizData[currentQuestion].question}</span>
            </div>
            <div className='option-container'>
                    {
                      QuizData[currentQuestion].options.map((option, i) => {
                        return (
                            <button key={i}
                            onClick={() => {
                                setClickedOption(i+1)
                            }}
                            className={`option-btn ${clickedOption == i+1 ? "checked" : null}`}>
                                {option}
                            </button>
                        )
                      })
                    }
            </div>
            <input type='button' value='Next' id='next-button' onClick={changeQuestion}></input>
            </> )}
        </div>
    </div>
  )
}

export default Quiz