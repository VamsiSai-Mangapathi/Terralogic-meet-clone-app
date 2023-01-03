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
function Home() {
  return (
    <div>
      <div className="style1">
        <h2 className="style2">
          <img
            src={image}
            alt="meet"
            style={{ height: "50px", width: "60px" }}
          ></img>
          Terralogic Meet
          <img
            src={image1}
            alt="meet"
            style={{ height: "30px", width: "30px", marginTop: "4px" }}
          ></img>
        </h2>
        <div className="icons">
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
        <div style={{ marginTop: "-150px" }}>
          <Slider></Slider>
        </div>
      </div>

      <div style={{ marginTop: "50px", marginLeft: "40px" }}>
        <p>
          connect, collaborate and celebrate from anywhere with Terralogic Meet
        </p>
      </div>
      <Button />
      <div></div>
    </div>
  );
}

export default Home;
