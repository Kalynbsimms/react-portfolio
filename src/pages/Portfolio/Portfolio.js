// import React from 'react';
// import { Card, Button, CardTitle, CardText } from 'reactstrap';

// const Portfolio = (props) => {
//     return (
//         <div>
//             <Card body>
//                 <CardTitle>Special Title Treatment</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Go somewhere</Button>
//             </Card>
//             <Card body className="text-center">
//                 <CardTitle>Special Title Treatment</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Go somewhere</Button>
//             </Card>
//             <Card body className="text-right">
//                 <CardTitle>Special Title Treatment</CardTitle>
//                 <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Go somewhere</Button>
//             </Card>
//         </div>
//     );
// };

// export default Portfolio;

import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Portfolio = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick Portfolio text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Portfolio;