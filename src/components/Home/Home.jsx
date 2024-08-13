import React, { useState } from 'react';
import Quiz from '../Quiz/Quiz'; // Adjust the import path as needed
import './Home.css';

const Home = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: 'Quiz 1', question: 'Which one is a circle?', answer: 'circle', options: ['circle', 'square', 'triangle'] },
        { name: 'Quiz 2', question: 'Which one is a square?', answer: 'square', options: ['circle', 'square', 'triangle'] },
        { name: 'Quiz 3', question: 'Which one is a triangle?', answer: 'triangle', options: ['circle', 'square', 'triangle'] },
        { name: 'Quiz 4', question: 'Which one is red?', answer: 'red', options: ['red', 'blue', 'green'], type: 'color' },
        { name: 'Quiz 5', question: 'Which one is blue?', answer: 'blue', options: ['red', 'blue', 'green'], type: 'color' },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleShowQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Kindergarten Quiz!</h1>
            <button className="show-quiz-button" onClick={handleShowQuiz}>
                Show Kindergarten Quiz
            </button>
            {showQuiz && (
                <>
                    <div className="tabs">
                        {tabs.map((tab, index) => (
                            <button 
                                key={index}
                                className={`tab ${activeTab === index ? 'active' : ''}`} 
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="quiz-section">
                        <Quiz 
                            question={tabs[activeTab].question} 
                            answer={tabs[activeTab].answer} 
                            options={tabs[activeTab].options} 
                            type={tabs[activeTab].type || 'shape'}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
