import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} alt="" id="heroImg" />
      <h1 id="heroh1">
        <span>I'm Rahul Nanera , </span>Full Stack Web Developer based in India
        .
      </h1>
      <p id="herop">
        I am a Full Stack Web Developer from Devbhoomi Dwarka , Gujarat , India
        .
      </p>
      <button id="heroConnectbtn">Connect With Me</button>
      <button id="heroResumebtn">My Resume</button>
    </div>
  );
};

export default Hero;
