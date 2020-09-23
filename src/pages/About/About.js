import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './About.css'
import { Container, Row, Col } from 'reactstrap';
import kalyn from '../../components/Assets/Images/kalyn.jpg'
import { useState } from 'react';


const Example = (props) => {
    
    return (
        <div>
                <div classname='container'>
                    <img className="size kalyn1" src={kalyn} alt="Kalyn's image" />
                </div>
                <Container>
                    <Row>
                        <Col> <h1 className="display-3">Hello,Kalyn Here!</h1>
                            <p className="lead">I am a Self-motivated Full Stack web developer and systems project coordinator  with a passion for helping individuals. I also have a background in  directing, coordinating, implementing, executing, controlling and driving Project Implementations. Recently earned a certificate in full stack development from the University of California Irvine, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.  Dedicated team player with exceptional interpersonal skills and a laser focus on business success.</p>
                            <hr className="my-2" />
                            <p>Now that you know a little about me, I would love to hear more about you. Check out ways to keep in touch</p>
                        <Row>
                            <Col xs="3">
                                <Button className="linkBtn" type="button" outline color="warning" size="lg" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://www.linkedin.com/in/kalynsimms/'
                                }}>LinkedIn, Let's Connect!</Button>
                            </Col>
                            <Col xs="auto"> </Col>
                            <Col xs="3">
                                <Button type="button" outline color="warning" size="lg" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://github.com/Kalynbsimms'
                                }}>GitHub, Let's Collab!</Button>
                            </Col>
                        </Row>
                        
                        
                       
                        </Col>
                    </Row>
                    </Container>
          
        </div>
    
    );
};

export default Example;
