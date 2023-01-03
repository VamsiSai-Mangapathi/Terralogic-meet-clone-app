import '../Forms/LoginForm.css';
import '../Forms/Registration.css';
import {NavLink,useHistory} from 'react-router-dom';
import React,{useState,useRef,useEffect} from 'react';
import Wrongemail from '../messages/Wrongemail';
import Wrongpassword from '../messages/Wrongpassword';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function LoginFormUser(props){
    const history=useHistory();
    const[wrong1,setwrong1]=useState();
    const[wrongemail2,setwrongemail2]=useState();
    const[wrongpassword2,setwrongpassword2]=useState();
    const[passwordlength,setpasswordlength]=useState();
    const[passworduppercase,setpassworduppercase]=useState();
    const[passwordlowercase,setpasswordlowercase]=useState();
    const[passwordnumber,setpasswordnumber]=useState();
    const [passwordspecial, setpasswordspecial] = useState();
    const[passwordcondition,setpasswordcondition]=useState();
    const emailInputRef1 = useRef();
    const passwordInputRef1 = useRef();


    // const loginHandler=()=>{
    //   setIsLogin(false);
    //   history.push('/after')
    // };
    const passwordenterhandler2=()=>{
      const enteredpassword1=passwordInputRef1.current.value;
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
    const submitHandler1 = (event) => {
      event.preventDefault();
  
      const enteredEmail1 = emailInputRef1.current.value;
      const enteredPassword1 = passwordInputRef1.current.value;
      
      
      
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBERMyCRpzcfn_xn0o7_b464pVhJI2Y1RI',
      
       {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail1,
          password: enteredPassword1,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            // setIsLogin(true);
            history.push('/after1')
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
          setwrong1(err.message);
          if(wrong1 === "EMAIL_NOT_FOUND"){
            setwrongemail2(true);
          }
          if(wrong1 === "INVALID_PASSWORD") {
            setwrongpassword2(true)
          }
        });
        
  };
  useEffect(() => {
    emailInputRef1.current.focus();
  }, []);

    const validHandler1=()=>{
      setwrongemail2(false);
    }
    const validpasswordHandler1=()=>{
      setwrongpassword2(false);
    }
    return (
      <div>
        <div className="mainform">
          <form onSubmit={submitHandler1}>
            <h5>Login to Terralogic Meet</h5>
            <div className="login">
              <label>Email Id</label>
              <input
                className="input"
                ref={emailInputRef1}
                type="text"
                required
              />
            </div>
            <div className="login1">
              <label>Password</label>
              <input
                type="password"
                ref={passwordInputRef1}
                required
                onInput={passwordenterhandler2}
                onClick={() => setpasswordcondition(true)}
              />
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
            </div>
            <div>
              <button type="submit" className="button1">
                Login
              </button>
              <p className="lins4">Do no have account ?</p>
              <NavLink to="/Registration1" style={{ textDecoration: "none" }}>
                <p className="lin4">Register</p>
              </NavLink>
            </div>
          </form>
          {/* {isLogin && <Loginmessage login={loginHandler}/>} */}
          {wrongemail2 && <Wrongemail valid={validHandler1} />}
          {wrongpassword2 && (
            <Wrongpassword validpassword={validpasswordHandler1} />
          )}
          {/* {wrong==="EMAIL_NOT_FOUND" ?{ wrongemail1 && <Wrongemail valid={validHandler}/> }:"" }
          {wrong==="INVALID_PASSWORD" ? <Wrongpassword /> :""} */}
        </div>
      </div>
    );
};

export default LoginFormUser;