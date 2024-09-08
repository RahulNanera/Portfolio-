import React from "react";
import "./About.css";
import patternImg from "../../assets/theme_pattern.svg";
import aboutImg from "../../assets/Rahul.jpg";
const About = () => {
  return (
    <div className="about">
      <h1 id="abouth1">About me</h1>
      <img src={aboutImg} alt="" id="aboutImg" />
      <p id="para1">
        I am a experienced Full Stack Web Developer with over a decade of
        professional expertise in the field . Throughout my career , I have the
        privilege of collaborating with prestigious organizations , contributing
        to their success and growth .
      </p>

      <p id="para2">
        My passion for Full Stack Web Development is not only reflected in my
        extensive experience but also in enthusiasm and dedication I bring to
        each project .
      </p>

      <div className="skills">
        <div className="skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "400px" }} />
          <p>90%</p>
        </div>
        <div className="skill">
          <p>Javascript</p>
          <hr style={{ width: "300px" }} />
          <p>70%</p>
        </div>
        <div className="skill">
          <p>React.js</p>
          <hr style={{ width: "350px" }} />
          <p>80%</p>
        </div>
        <div className="skill">
          <p>Node.js</p>
          <hr style={{ width: "320px" }} />
          <p>73%</p>
        </div>
        <div className="skill">
          <p>Express.js</p>
          <hr style={{ width: "370px" }} />
          <p>87%</p>
        </div>
        <div className="skill">
          <p>MongoDB</p>
          <hr style={{ width: "420px" }} />
          <p>95%</p>
        </div>
      </div>
    </div>
  );
};

export default About;
