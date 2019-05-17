import React from 'react' 
import { Container, Row, Col } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col  xs lg="5">Welcome to My App</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home