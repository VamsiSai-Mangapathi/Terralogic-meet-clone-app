import image from "../../../src/components/Kyathi/terraimage.jpg";
import './Style.css';
import React from "react";
import Button from "./Button";
import image1 from '../../../src/components/Kyathi/vedio.png';
import DateAndTime from './Date';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Slider from './Slider';
import {useHistory} from "react-router-dom";
import firepadRef from "../../server/firebase";

function Home() {
  const history=useHistory();
  return (
    <div style={{overflowX:"hidden", overflowY:"hidden"}}>
      <div className="style1">
        <h2 className="style2">
          <img
            src={image}
            alt="meet"
            style={{ height: "50px", width: "60px" }}
          ></img>
          <h1 style={{fontSize:"20px",width:"200px",marginLeft:"20px"}}>Terralogic Meet</h1>
          <img
            src={image1}
            alt="meet"
            style={{ height: "30px", width: "30px", marginTop: "4px",marginLeft:"-30px" }}
          ></img>
        </h2>
        <div style={{display:"flex" , alignItems:"center", width:"400px", justifyContent:"space-between", marginLeft:"40%"}}>
          <DateAndTime></DateAndTime>
          <HelpOutlineOutlinedIcon />
          <FeedbackOutlinedIcon />
          <SettingsOutlinedIcon />
          <AppsOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </div>
      <div>
        <div className="style3">
          <h2>Secure video conferencing for everyone</h2>
        </div>
        <div>
          <Slider></Slider>
        </div>
      </div>

      <div style={{ marginTop: "-400px", marginLeft: "40px" }}>
        <p>
          connect, collaborate and celebrate from anywhere with Terralogic Meet
        </p>
      </div>
      <Button />
      <div>
        <h1 style={{fontSize:"15px",fontWeight:"400",marginLeft:"40px",marginTop:"30px"}}>Already Invited Please Click Here To Join Meeting</h1>
        <button className="joinbutton" onClick={()=>{history.push ("/meeting/"+`?id=${firepadRef.key}`)}}>Join Now</button>
      </div>
    </div>
  );
}

export default Home;
