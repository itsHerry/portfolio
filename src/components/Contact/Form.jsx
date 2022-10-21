import { useState } from "react";
import "./contact.css";

function Form() {
  let [fName, setFName] = useState("");
  let [lName, setLName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  return (
    <div className="form">
      <h1 className="contact-us">Contact Us</h1>
      <form action="#">
        <input
          type="text"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          id="fname"
          placeholder="First Name"
        />
        <input
          type="text"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          id="lname"
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Email"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Message"
        />
      </form>
      <button type="button" className="btn">
        Submit
      </button>
    </div>
  );
}

export default Form;
