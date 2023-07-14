import React from 'react';
import '../../styles/features.style.css';

const Features = () => {
    return (
        <>
            <h2 className='featureheading'>Key Features</h2>
            <div className='featureContainer'>
                <div className="cardBody">
                    <div className="cardimage">
                        <img src="/images/illu7.jpg" alt="cardimg" height='200px' />
                    </div>
                    <div className="cardtext">Cost Effective</div>
                </div>
                <div className="cardBody">
                    <div className="cardimage">
                        <img src="/images/illu8.jpg" alt="cardimg" />
                    </div>
                    <div className="cardtext">Brilliant Academic Records</div>
                </div>
                <div className="cardBody">
                    <div className="cardimage">
                        <img src="/images/illu9.jpg" alt="cardimg" />
                    </div>
                    <div className="cardtext">Best Ratings across India</div>
                </div>
                <div className="cardBody">
                    <div className="cardimage">
                        <img src="/images/illu10.jpg" alt="cardimg" />
                    </div>
                    <div className="cardtext">Professional Mentors</div>
                </div>

            </div>
        </>

    );
};

export default Features;