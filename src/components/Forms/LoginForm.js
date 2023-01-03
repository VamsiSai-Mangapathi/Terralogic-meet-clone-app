import './LoginForm.css';
import {NavLink,useHistory} from 'react-router-dom';
import React,{useState,useRef,useEffect} from 'react';
import './Registration.css';
import Wrongemail from '../messages/Wrongemail';
import Wrongpassword from '../messages/Wrongpassword';


function LoginForm(props){
    const history=useHistory();

    const[wrong,setwrong]=useState();
    const[wrongemail1,setwrongemail1]=useState();
    const[wrongpassword1,setwrongpassword1]=useState();
    const[passwordlength,setpasswordlength]=useState();
    const[passworduppercase,setpassworduppercase]=useState();
    const[passwordlowercase,setpasswordlowercase]=useState();
    const[passwordnumber,setpasswordnumber]=useState();
    const [passwordspecial, setpasswordspecial] = useState();
    const[passwordcondition,setpasswordcondition]=useState();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();


    const passwordenterhandler1=()=>{
      const enteredpassword1=passwordInputRef.current.value;
        if(enteredpassword1.trim().length>=8){
          setpasswordlength(true);
        }else
        if(enteredpassword1.trim().length<8){setpasswordlength(false)}
        if(enteredpassword1.match(/[A-Z]/)){
          setpassworduppercase(true);
        }
        else {
          setpassworduppercase(false);
        }
        if(enteredpassword1.match(/[a-z]/)){
          setpasswordlowercase(true);
        }
        else{
          setpasswordlowercase(false);
        }
        if(enteredpassword1.match(/[0-9]/)){
          setpasswordnumber(true);
        }
        else{
          setpasswordnumber(false);
        }
        if(enteredpassword1.match(/[^A-Za-z0-9-' ']/i)){
          setpasswordspecial(true);
        }
        else{
          setpasswordspecial(false);
        }
    }
    
    const submitHandler = (event) => {
      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      window.localStorage.setItem("username",enteredEmail);

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBERMyCRpzcfn_xn0o7_b464pVhJI2Y1RI",
        // "http://127.0.0.1:8000/49.205.67.174/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            history.push("/after");
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          setwrong(err.message);
          if (wrong === "EMAIL_NOT_FOUND") {
            setwrongemail1(true);
          }
          if (wrong === "INVALID_PASSWORD") {
            setwrongpassword1(true);
          }
        });
    };
  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

    const validHandler=()=>{
      setwrongemail1(false);
    }
    const validpasswordHandler=()=>{
      setwrongpassword1(false);
    }
    return (
      <div>
        <div className="mainform">
          <form onSubmit={submitHandler}>
            <h5>Login to Terralogic Meet</h5>
            <div className="login">
              <label>Email Id</label>
              <input
                className="input"
                ref={emailInputRef}
                type="text"
                required
              />
            </div>
            <div className="login1" >
              <label>Password</label>
              <input
                type="password"
                ref={passwordInputRef}
                required
                onInput={passwordenterhandler1}
                onClick={() => setpasswordcondition(true)}
              />
            </div>
            <div className="conditions">
             {passwordcondition ? (
              <div>
                <ul
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    marginLeft: "35px",
                  }}
                >
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordlength ? "green" : "red",
                    }}
                  >
                    Minimum 8 characters
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passworduppercase ? "green" : "red",
                    }}
                  >
                    Aleast One Uppercase
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordlowercase ? "green" : "red",
                    }}
                  >
                    Lowercase
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordnumber ? "green" : "red",
                    }}
                  >
                    Number
                  </li>
                  <li
                    style={{
                      lineHeight: "20px",
                      color: passwordspecial ? "green" : "red",
                    }}
                  >
                    Special Character
                  </li>
                </ul>
              </div>
             ) : (
              ""
             )}
            </div>
            <div>
              <button type="submit" className="button1">
                Login
              </button>
              <p className="lins4">Do no have account ?</p>
              <NavLink to="/Registration" style={{ textDecoration: "none" }}>
                <p className="lin4">Register</p>
              </NavLink>
            </div>
          </form>
          {wrongemail1 && <Wrongemail valid={validHandler} />}
          {wrongpassword1 && (
            <Wrongpassword validpassword={validpasswordHandler} />
          )}
        </div>
      </div>
    );
};

export default LoginForm;