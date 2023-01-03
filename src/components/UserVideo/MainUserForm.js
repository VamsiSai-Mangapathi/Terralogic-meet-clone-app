import NewformUser from './NewformUser';
import React,{useState} from 'react';
import Header from '../Header';
import logo2 from '../../assets/image.png';
import LoginFormUser from './LoginFormUser';


function MainUserForm(){
    
    const[Newform2,setNewform2]=useState(true);
    const[login1,setlogin1]=useState();
    const newHandler1=()=>{
        setNewform2(false);
        setlogin1(true);
    }

    
 return (
   <div>
     <Header />
      <div>
        {<img className="logo1" src={logo2} alt="logo2" />}
      </div>
     <div>
        {Newform2 && <NewformUser click1={newHandler1}/>}
        {login1 && <LoginFormUser />}
     </div>
   </div>
 );
}

export default MainUserForm;