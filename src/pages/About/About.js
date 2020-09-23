import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './About.css'
import { Container, Row, Col } from 'reactstrap';
import kalyn from '../../components/Assets/Images/kalyn.jpg'
import { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const Example = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div>
            {/* <Jumbotron> */}
                <div classname='container'>
                    <img className="size kalyn1" src={kalyn} alt="Kalyn's image" />
                </div>
                <Container>
                    <Row>
                        <Col> <h1 className="display-3">Hello,Kalyn Here!</h1>
                            <p className="lead">I am a Self-motivated Full Stack web developer and systems project coordinator  with a passion for helping individuals t, as well as  directing, coordinating, implementing, executing, controlling and completing Project Implementations. Recently earned a certificate in full stack development from the University of California Irvine, with newly developed skills in JavaScript, CSS, React.js, and responsive web design.  Dedicated team player with exceptional interpersonal skills and a laser focus on business success seeking the position of Front-end Web Developer.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <Button id="Popover1" type="button" outline color="warning"  size="lg">LinkedIn!</Button>{' '}
                            <Button outline color="warning" size="lg">Check out my GitHub!</Button>{' '}
                        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                            <PopoverHeader>Let's Connect</PopoverHeader>
                            <PopoverBody>Send me a message, I'm always interested in connecting with other developers!</PopoverBody>
                        </Popover>
                           
                        </Col>
                    </Row>
                    </Container>
{/*                
            </Jumbotron> */}
        </div>
    
    );
};

export default Example;



// const Example = (props) => {
//     const [popoverOpen, setPopoverOpen] = useState(false);

//     const toggle = () => setPopoverOpen(!popoverOpen);

//     return (
//         <div>
//             <Button >
//                 Launch Popover
//       </Button>
//             <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
//                 <PopoverHeader>Popover Title</PopoverHeader>
//                 <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
//             </Popover>
//         </div>
//     );
// }

// export default Example;