import './Emailvalid.css';
import React from 'react';
function Emailvalid(props){
    return(
        <div className='backdrop3' onClick={props.email}>
            <div className="modal3">
                <header className='header3'><h1>Invalid Email</h1></header>
                <div className='content3'>
                    <h1>Email Should Includes :- "@terralogic.com"</h1>
                </div>
                <button className='button2' onClick={props.email}>okay</button>
            </div>
        </div>
    )
};
export default Emailvalid;

