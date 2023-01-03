import './Passwordvalid.css';
import React from 'react';
function Passwordvalid(props){
    return(
        <div className='backdrop1' onClick={props.validpassword}>
            <div className="modal1">
                <header className='header1'><h1>Invalid password</h1></header>
                <div className='content1'>
                    <ul>
                        <li>password lenght should greater than 8</li>
                        <li>Must incluse one numeric</li>
                        <li>Must incluse one Upper Case</li>
                        <li>Must incluse one Lower Case</li>
                        <li>Must incluse one special character</li>
                    </ul>
                </div>
                <button className='button3' onClick={props.validpassword}>okay</button>
            </div>
        </div>
    )
};
export default Passwordvalid;