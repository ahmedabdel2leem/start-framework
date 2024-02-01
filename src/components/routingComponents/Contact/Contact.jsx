import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Star from "./../../Star/Star";
import "./contact.css";
export default function Contact() {
  const context = useOutletContext();
  const [formData, setFormData] = useState({
    username: '',
    userage: '',
    useremail:'',
    userpassword:''
    // Add more inputs as needed
  });
  const contactClass = "contact";

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state with the new input value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="co_contact">
        <div className="container  ">
          <Star myClass={contactClass} linkName={context.link + " SECTION"} />
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="inputs">
                <label className= { (formData.username !== ''?'top-0' : '') +" label position-relative"} htmlFor="userName">
                  UserName :
                </label>
                <input
                 onKeyUp={handleInputChange}
                  id="userName"
                  name="username"
                  type="text"
                  placeholder="userName"
                  className="form-control border-0 border-bottom py-3 position-relative "
                />
                <label className={ (formData.userage !== ''?'top-0' : '') +" label position-relative"}  htmlFor="userAge">
                  userAge :
                </label>
                <input
                onKeyUp={handleInputChange}
                  id="userAge"
                  name="userage"
                  type="text"
                  placeholder="userAge"
                  className="form-control border-0 border-bottom py-3 position-relative"
                />
                <label className={ (formData.useremail !== ''?'top-0' : '') +" label position-relative"}  htmlFor="userEmail">
                  userEmail :
                </label>
                <input
                onKeyUp={handleInputChange}
                  id="userEmail"
                  name="useremail"
                  type="text"
                  placeholder="userEmail"
                  className="form-control border-0 border-bottom py-3 position-relative"
                />
                <label
                  className={ (formData.userpassword !== ''?'top-0' : '') +" label position-relative"} 
                  htmlFor="userPassword"
                >
                  userPassword :
                </label>
                <input
                onKeyUp={handleInputChange}
                  id="userPassword"
                  name="userpassword"
                  type="password"
                  placeholder="userPassword"
                  className="form-control border-0 border-bottom py-3 position-relative"
                />
              </div>
              <button className=" myBtn my-3">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
