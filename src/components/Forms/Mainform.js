import Newform from './Newform';
import React,{useState} from 'react';
import Header from "../Header";
import logo1 from '../../assets/image.png';
import LoginForm from './LoginForm';


function Mainform(){
    
    const[Newform1,setNewform1]=useState(true);
    const[login,setlogin]=useState();
    const newHandler=()=>{
        setNewform1(false);
        setlogin(true);
    }

    
 return (
   <div>
     <Header />
      <div>
        {<img className="logo1" src={logo1} alt="logo1" />}
      </div>
     <div>
        {Newform1 && <Newform click={newHandler}/>}
        {login && <LoginForm />}
     </div>
   </div>
 );
}

export default Mainform;