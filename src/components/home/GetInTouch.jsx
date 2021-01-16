/* eslint-disable jsx-a11y/accessible-emoji */
import{ init } from 'emailjs-com';
import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import {  Button, Form, Spinner } from "react-bootstrap";

const GetInTouch = () => {

  const [email, setEmail] = useState("")
  
  const [message, setMessage] = useState("")
  const [loading, setloading] = useState(false)
  
  useEffect(() => {
    if (message === "") {
      setloading(true)
    } else {
      setloading(false)
    }
  }, [message])
  useEffect(() => {
    init("user_Sedyz9xTeL6nJ8AKw7VER");
  }, [])
  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    const templateParams = {
      from_name: email, message
    };
    try {
      const response = await emailjs.send('service_t0bncvt', 'template_xuyq0z4', templateParams)
      console.log(response)
  
      alert("Your response is recorder with us we will get back to you as soon as possible")
    } catch (error) {
      console.log(error.text)
  alert("please contact through another medium. we are going through some issue ")
    }
    setEmail("")
    setMessage("")
    setloading(false);
  }
  return (
    <div id="contact">
      <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
      <p className="lead text-center pb-1">
        I'm currently looking for freelancing web development jobs as well as internships and other Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at, <a href={`mailto:satyaarthchhabra@gmail.com`}>satyaarthchhabra@gmail.com</a>.<br /> or
      </p>
      <div className="container d-flex justify-content-center align-itens center">
        <Form onSubmit={handleSubmit} className="pb-3">
          <Form.Group controlId="formBasicEmail">

            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="👋🏻 Pls Enter Email 👋🏻" />

          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="text"
              value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Leave Your Message here 👨🏻‍💻 👩🏻‍💻 " />
          </Form.Group>
          <Form.Text className="text-muted pb-3">
            We'll try to respond you as soon as possible.<span role="img"> 😇😇 </span>
    </Form.Text>
          <Button disabled={loading} variant="primary" type="submit" block>
            <Spinner
              as="span" disabled
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"

            />
            Lets meet
  </Button>
        </Form>

      </div>
    </div>
  );
};

export default GetInTouch;
