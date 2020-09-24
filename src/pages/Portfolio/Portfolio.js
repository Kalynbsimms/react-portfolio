import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import pikachu from '../../components/Assets/Images/Pikachu.png'
import trActivity from '../../components/Assets/Images/trActivity.png'

const Portfolio = (props) => {
    return (
        <CardColumns>
            <Card>
                <CardImg top width="30%" src={pikachu} alt="Pikachu" />
                <CardBody>
                    <CardTitle>Project 1</CardTitle>
                    <CardSubtitle>Poke Project</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://kalynbsimms.github.io/pokeProject/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/Kalynbsimms/pokeProject'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="30%" src={trActivity} alt="TrActivity" />
                <CardBody>
                    <CardTitle>Project 2</CardTitle>
                    <CardSubtitle>trActivity</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="30%" src={trActivity} alt="TrActivity" />
                <CardBody>
                    <CardTitle>Project 2</CardTitle>
                    <CardSubtitle>trActivity</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="30%" src="/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Project 3</CardTitle>
                    <CardSubtitle>CodeIn</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="30%" src={trActivity} alt="TrActivity" />
                <CardBody>
                    <CardTitle>Project 2</CardTitle>
                    <CardSubtitle>trActivity</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="30%" src={trActivity} alt="TrActivity" />
                <CardBody>
                    <CardTitle>Project 2</CardTitle>
                    <CardSubtitle>trActivity</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>  <Card>
                <CardImg top width="30%" src={trActivity} alt="TrActivity" />
                <CardBody>
                    <CardTitle>Project 2</CardTitle>
                    <CardSubtitle>trActivity</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://cryptic-savannah-70126.herokuapp.com/index.html/'
                    }}>Check out the Site!</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/danielle94869/TrActivivy'
                    }}>Check out the Code!</Button>
                </CardBody>
            </Card>
            
        </CardColumns>
    );
};

export default Portfolio;