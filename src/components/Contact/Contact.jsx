import React from "react";
import "./Contact.css";
import pattern from "../../assets/theme_pattern.svg";
import mailImg from "../../assets/mail_icon.svg";
import callImg from "../../assets/call_icon.svg";
import locatioImg from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ffad481-dc04-4008-a974-0aeb8235d437");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <h1 id="contacth1">Get in touch</h1>
      <h2 id="talk">Let's talk</h2>
      <p id="project">
        I'm currently available to take on new projects , so feel free to send
        me a messege about anything that you want me to work on . You can
        contact anytime .
      </p>
      <img src={mailImg} alt="" id="mailImg" />
      <p id="mailId">rahulnanera203@gmail.com</p>
      <img src={callImg} alt="" id="callImg" />
      <p id="callInfo">9023737507</p>
      <img src={locatioImg} alt="" id="locationImg" />
      <p id="locationInfo">Rupamora , Devbhoomi Dwarka , Gujrat , 360510 .</p>
      <form onSubmit={onSubmit}>
        <div>
          <label id="l1">Full Name</label>
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            name="Name"
          />
        </div>
        <div>
          <label id="l2">Your Email</label>
          <input
            type="email"
            placeholder="Write your email"
            id="mail"
            name="Email"
          />
        </div>
        <div>
          <label id="l3">Message</label>
          <textarea
            placeholder="Write your message "
            id="Msg"
            rows="10"
            cols="20"
            name="Message"
          ></textarea>
        </div>

        <button id="contactSubmitbtn">Submit now</button>
      </form>
    </div>
  );
};

export default Contact;
