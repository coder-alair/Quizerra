import React from 'react';
import '../../styles/contactus.style.css';

const Contactus = () => {
    return (
        <div className='contactuscontainer' id='contactus'>
            <div className="contactusheading">
                Contact Us
            </div>

            <div className="contactusform">

                <div className="container">
                    <div className="cardcontact">
                        <div className="contactusForm">
                            <div className="inputBox1">
                                <input type="text" required="required" />
                                <span className="user">Email</span>
                            </div>

                            <div className="inputBox">
                                <input type="number" required="required" />
                                <span>Mobile</span>
                            </div>

                            <div className="inputBox">
                                <input type="text" required="required" />
                                <span>comment</span>
                            </div>

                            <button className="enter">Get Alert</button>
                        </div>
                    </div>
                </div>



            </div>



        </div>
    );
};

export default Contactus;