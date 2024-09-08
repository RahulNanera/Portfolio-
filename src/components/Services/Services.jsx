import React from "react";
import "./Services.css";
import theme from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div className="services">
      <h1 id="servicesh1">My Services</h1>

      <div className="servicesContainer">
        {Services_Data.map((item, i) => {
          return (
            <div className="servicesValues" key={i}>
              <p id="s_no">{item.s_no}</p>
              <h2 id="s_name">{item.s_name}</h2>
              <p id="s_desc">{item.s_desc}</p>
              <p id="read">Read more</p>
              <img src={arrow_icon} alt="" id="arrow_icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
