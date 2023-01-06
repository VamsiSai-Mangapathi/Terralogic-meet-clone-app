import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "./img1.svg"
import image2 from "./img2.svg"
import image3 from "./img3.svg"

const ImageSlider=()=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return(
        <div style={{width:"330px",marginLeft:"60%"}}>
       
        <Slider {...settings}>
          <div>
           <img src={image1} alt=""></img>
           <h5><center>Get a link u can share</center></h5>
           <div style={{marginLeft:"40px"}}>Click New Meeting to get a link you can
             send to people you want to meet with
           </div>
          </div>
          <div>
          <img src={image2} alt=""></img>
          <h5><center>See everyone together</center></h5>
          <div style={{marginLeft:"40px"}}>To see more people at the same time, go to change
               layout in more options menu
          </div>
          </div>
          <div>
          <img src={image3} alt=""></img>
          <h5><center>your meeting is safe</center></h5>
          <div style={{marginLeft:"40px"}}>No one outside your organization can join a meeting unless
                inivited or admitted by the host
          </div>
          </div>
          
          
        </Slider>
      </div>
    )
}
export default ImageSlider;