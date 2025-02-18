import React, { useState } from 'react';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';

const Contact: React.FC= () => {
  const [name, setName] = useState <string> ('');
  const [email, setEmail] = useState <string> ('');
  const [message, setMessage] = useState <string> ('');
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission, e.g., send data to a server
    console.log({ name, email, message });

    const formData = {
        name,
        email,
        message,
    }
        const contacts = readLocalStorage ();
        contacts.push ((formData));
        localStorage.setItem("contactForm", JSON.stringify(contacts));
    
    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
    };
    
    const readLocalStorage = () => {
        const data = localStorage.getItem("contactForm");
        return data ? JSON.parse(data) : [];
      };
    return (
      <><header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <div className="contact">
                                <header className="contact-header">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 className="title">Contact Us</h1>
                                                    </Card.Title>
                                                    
                                                        <Card.Text className="body">Matthew Unrein</Card.Text>
                                                        <Card.Text className="body">769-532-6265</Card.Text>
                                                        <Card.Text className="body">email@gmail.com</Card.Text>
                                                        <Card.Text className="body">If you have questions or are intested in my services please fill out the form below</Card.Text>
                                                    
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Container>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header><div className="contact-body">
                <div className="header">Get in Touch</div>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit} id="contactForm">
                                <Form.Group >
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control value= {name} onChange= {(event)=>setName(event.target.value)} type="text" id="name"placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control value= {email} onChange= {(event)=>setEmail(event.target.value)} type="email" id="email"placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                    <Form.Control value= {message} onChange= {(event)=>setMessage(event.target.value)} as="textarea" id="message" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div></> 
    );
};
export default Contact;

















