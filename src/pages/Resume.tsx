import React, { useState } from 'react';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';
const style = {
    img: {
        objectFit: 'cover'
    }
};

const ResumeLink: React.FC = () => {
  return (
    <a href="https://docs.google.com/document/d/1n_OPSEbTUsnxgOgSLXAnGoxA02aiMMXLcQv046KOjrM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
      Download Resume
    </a>
  );
};


const ContactUs: React.FC= () => {
    
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
                                                        <h1 className="title">My Resume</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">Click the link above</p>
                                                        </Card.Text>
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
        </header>
        <div className="contact-body">
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='text-white'>
                            <div className="contact">
                                <header className="contact-header">
                                <Container>
                                        <Row>
                                            <Col>
                                                
                                            </Col>
                                        </Row>
                                    </Container>
                                </header>
                            </div>
                </div>
            </div>
        </div></>
    );
};
export default ContactUs;

// line 19-22

















