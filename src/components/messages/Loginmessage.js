import './Registermessage.css';
import React from 'react';
function Loginmessage(props){
    return(
        <div className="backdrop2" onClick={props.login}>
            <div className='modal2'>
                <h1>Login Successfull</h1>
                <button className='button4' onClick={props.login}>okay</button>
            </div>
        </div>
    )
}

export default Loginmessage;