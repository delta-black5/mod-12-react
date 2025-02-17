import React, { useState } from 'react';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';
const style = {
    img: {
        objectFit: 'cover'
    }
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
                                                        <h1 className="title">About Me</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">Learn More About Me</p>
                                                        </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                   <div style={{
                                                        Image: "url('https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg')",
                                                        ImageSize: 'cover',
                                                        ImagePosition: 'center',
                                                        ImageRepeat: 'no-repeat',
                                                         height: '100vh',
                                                        padding: 0,
                                                        margin: 0
                                                 } as React.CSSProperties}></div>
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
                                                <Card.Body>
                                                    <Card.Text>
                                                        <p className="body">Matthew Unrein is a versatile web developer, 
                                                            graphic designer, and marketer with a passion for creating visually stunning and highly functional digital experiences. 
                                                            With expertise in front-end and back-end development, UI/UX design, and strategic marketing, 
                                                            Matthew Unrein bridges the gap between technology and creativity. They specialize in building user-friendly websites, 
                                                            crafting compelling brand visuals, and implementing data-driven marketing strategies to help businesses grow. 
                                                            Whether coding responsive web applications, designing eye-catching graphics, or optimizing campaigns for maximum reach, 
                                                            Matthew delivers impactful solutions that engage and convert audiences.</p>
                                                    </Card.Text>
                                                </Card.Body>
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

















