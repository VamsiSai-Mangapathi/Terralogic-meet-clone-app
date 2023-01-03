// import firepadRef from "./../../server/firebase";
import Userside from '../UserVideo/Userside';
import React from 'react';
import MainScreen from "./../MainScreen/MainScreen.component"
function Adminpage(){
    

    const isAdmin1 = window.location.hash === '#init' ? true : false;
    const url=window.localStorage.getItem("url");
    console.log(url,"url");
    return(
        <div>
            {isAdmin1 ? (<MainScreen />):(<Userside />)}
        </div>
    );
}
export default Adminpage;