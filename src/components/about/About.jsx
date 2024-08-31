import React from 'react';
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'></img>
            <img src={play_icon} className='play-icon' onClick={() => {setPlayState(true)}}></img>
        </div>
        
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our universities comprehensive education programs. 
            Our cutting edge curriculum is designed to empower students with the knowledge skills and experience is needed to excel in the dynamic field of education</p>
            <p>With a focus of innovation hands on learning and personalized mentorship our programs prepare Aspiring educators to 
            make a meaningful impact in classroom, schools and communities</p>
            <p>Wheather are you Aspire to become a teacher, administrator, Counselor or educational leader or diverse range of programs 
            offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        </div>
    </div>
  )
}

export default About