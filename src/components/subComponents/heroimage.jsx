import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/heroimage.style.css';


const Heroimage = () => {
    return (
        <div>
            <div className="heroimageContainer">
                <div className="heroimg">
                    <img src='/images/illu1.jpeg' alt='heroimage' />
                </div>
                <div className="heroText">
                    <div className="heromaintext"> Welcome to Our Quizzer'a,</div>

                    <div className="herosubtext">Take your free test now</div>
                    <br />
                    <Link to='/quiz'>
                        <span>Take a Quiz</span><i></i>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Heroimage;