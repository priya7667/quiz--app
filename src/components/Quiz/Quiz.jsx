import React, { useState, useEffect, useRef } from 'react';
import './Quiz.css';

const Quiz = ({ question, options, answer, type }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    // Start the stopwatch when the component mounts
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    // Stop the timer when an answer is selected
    useEffect(() => {
        if (selectedAnswer !== null) {
            clearInterval(timerRef.current);
        }
    }, [selectedAnswer]);

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);

        if (option === answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            alert('Incorrect answer, please try again!');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <div className="shapes-container">
                {options.map((option, index) => (
                    <div 
                        key={index}
                        className={`shape ${type === 'color' ? option : option} ${selectedAnswer === option ? 'selected' : ''}`} 
                        onClick={() => handleAnswerClick(option)}
                    >
                        {type === 'color' ? (
                            <div className={`color-box ${option}`}></div>
                        ) : (
                            <span>{option}</span>
                        )}
                    </div>
                ))}
            </div>
            {isCorrect === true && (
                <div className="result correct">
                    Correct!
                </div>
            )}
            {isCorrect === false && (
                <div className="result incorrect">
                    Try again!
                </div>
            )}
            <div className="stopwatch">
                Time: {formatTime(time)}
            </div>
        </div>
    );
};

export default Quiz;
