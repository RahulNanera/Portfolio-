import React from "react";
import "./MyWork.css";
import thmpatnn from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div className="work">
      <h1 id="workh1">My Latest Work</h1>
      <div className="workContainer">
        {mywork_data.map((item, i) => {
          return (
            <div className="workingImg" key={i}>
              <img src={item.w_img} alt="" id="workImg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
