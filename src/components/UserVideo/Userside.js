import MainScreen from "./../MainScreen/MainScreen.component"
import RegistrationUser from "./RegistrationUser";
import MainUserForm from "./MainUserForm";
import React from "react";
import {Route,Redirect,} from 'react-router-dom';

function Userside(){
    return (
      <div>
        <Route path="/:id" exact>
          <Redirect to="/login1" />
        </Route>
        <Route path="/login1">
          <MainUserForm />
        </Route>
        <Route path="/Registration1">
          <RegistrationUser />
        </Route> 
        <Route path="/after1" exact>
          <Redirect to="after1" />
        </Route>
        <Route path="/after1">
          <MainScreen />
        </Route>
      </div>
    );
}

export default Userside;