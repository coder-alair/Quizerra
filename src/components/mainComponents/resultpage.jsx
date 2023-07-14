import React, { useContext, useEffect } from 'react';
import '../../styles/resultpage.style.css';
import { Link, useNavigate } from 'react-router-dom';
import { AnswerContext } from '../../contexts/answersContext';

const Result = () => {
    const { data } = useContext(AnswerContext);
    const navigate=useNavigate();
    let { questionAnswers, userAnswers } = data;
    let correct = 0;
    let wrong = 0;
    let percent=null;

    useEffect(()=>{
        if(questionAnswers.length===0){
            navigate('/');
        }
    },[questionAnswers])

    function getResult() {
        if (questionAnswers.length===0||userAnswers.length===0 || !questionAnswers || !userAnswers) {
            console.log('some error getting question answers');
            return;
        }
        for (let i = 0; i <= questionAnswers.length; i++) {
            if (questionAnswers[i] &&  userAnswers[i]){
                
            }
            if (questionAnswers[i] && (questionAnswers[i] === userAnswers[i])) {
                correct++;
            }
            if (questionAnswers[i] !== userAnswers[i]) {
                wrong++;
            }
        }

        percent=(correct*100)/questionAnswers.length;

    }
    getResult();


    return (
        <div className='resultContainer'>
            <div className="mainlogo">
                <p className="text">
                    Quizzer'a
                </p>
            </div>

            <div className="resultcontentContainer">
                <div className="resultcard">
                    <p>Result</p>
                    <table className="table w-75 h-50 m-auto">

                        <tbody>
                            <tr>
                                <td>Total Questions</td>
                                <td>{questionAnswers.length}</td>
                            </tr>
                            <tr>
                                <td>Correct Answers</td>
                                <td>{correct}</td>
                            </tr>
                            <tr>
                                <td>Wrong Answers</td>
                                <td>{wrong}</td>
                            </tr>
                            <tr>
                                <td>Percentage</td>
                                <td>{percent}%</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="buttons">
                        <Link to='/' id='home'>Go to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;