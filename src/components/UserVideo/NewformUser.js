import '../Forms/Newform.css';
import React,{useRef,useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function NewformUser(props){
  const emailref=useRef();
    useEffect(()=>{
      emailref.current.focus();
    },[])
    return (
      <div>
        <div className="newform">
          <div className="newlogin">
            <form>
              <h5>Login to Terralogic Meet</h5>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="newinput"
                  id="email"
                  ref={emailref}
                  onClick={props.click1}
                />
                <p className="lins4">Do no have account ?</p>
                <NavLink to="/Registration1" style={{ textDecoration: "none" }}>
                  <p className="lin4">Register</p>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default NewformUser;