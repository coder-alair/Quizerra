import React, { useContext, useEffect, useState } from 'react';
import '../../styles/quizpage.style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AnswerContext } from '../../contexts/answersContext';

const Quizpage = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [QAns, setQAns] = useState([]);
    const [buttonDis, setButtonDis] = useState(true);
    const [error, setError] = useState('');

    const { dispatch } = useContext(AnswerContext);


    const navigate = useNavigate();

    useEffect(() => {

        const getQuestions = async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/api/quiz');
                setQuestions(data.questions);
                setAnswers(new Array(data.questions.length).fill(''));
                let answer = data.questions.map((i) => i.answer);
                setQAns(answer);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        getQuestions();
    }, []);


    useEffect(() => {
        if (buttonDis === false) {
            setError('');
        }
        else {
            setError("*Please Complete the Test to See Results");
        }
    }, [buttonDis])

    useEffect(() => {

        for (let i = 0; i < answers.length; i++) {
            if (answers[i] !== '') {
                setButtonDis(false)
            }
            else {
                setButtonDis(true);
                break;
            }
        }

    }, [answers]);

    const handleSelect = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);

    };

    const handleClick = () => {
        dispatch({ type: "ADD_ANS", payload: { userAnswers: answers, questionAnswers: QAns } })
        navigate('/quiz/result');
    };

    return (
        <div className='quizpageContainer'>
            <div className='mainlogo'>
                <p className='text'>Quizzer'a</p>
            </div>

            <div className='quizcontentContainer'>
                {questions.map((question, index) => (
                    <div className='quizCard' key={question._id}>
                        <div className='quizquestion'>{question.question}</div>
                        <div className='quizoptions'>
                            <div className='radio-input' key={question._id}>
                                <input
                                    type='radio'
                                    id={`option-${index}-1`}
                                    name={`option-${index}`}
                                    value={question.op1}
                                    checked={answers[index] === question.op1}
                                    onChange={() => handleSelect(index, question.op1)}
                                />
                                <label htmlFor={`option-${index}-1`}>{question.op1}</label>

                                <input
                                    type='radio'
                                    id={`option-${index}-2`}
                                    name={`option-${index}`}
                                    value={question.op2}
                                    checked={answers[index] === question.op2}
                                    onChange={() => handleSelect(index, question.op2)}
                                />
                                <label htmlFor={`option-${index}-2`}>{question.op2}</label>

                                <input
                                    type='radio'
                                    id={`option-${index}-3`}
                                    name={`option-${index}`}
                                    value={question.op3}
                                    checked={answers[index] === question.op3}
                                    onChange={() => handleSelect(index, question.op3)}
                                />
                                <label htmlFor={`option-${index}-3`}>{question.op3}</label>

                                <input
                                    type='radio'
                                    id={`option-${index}-4`}
                                    name={`option-${index}`}
                                    value={question.op4}
                                    checked={answers[index] === question.op4}
                                    onChange={() => handleSelect(index, question.op4)}
                                />
                                <label htmlFor={`option-${index}-4`}>{question.op4}</label>
                            </div>
                        </div>
                    </div>
                ))}
                {error.length !== 0 ? <span className='errormsg'>{error}</span> : null}


                <div className='buttons'>
                    <button onClick={handleClick} disabled={buttonDis}>Check Result</button>
                    <Link to='/' id='home'>
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Quizpage;
