import React from 'react';
import Herosection from '../HeroSection/Herosection';
import Navs from '../Navs/Navs';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        
            <Container fluid className="g-0">
                <Row>
                   
                        <Navs />
                  
                </Row>
                <Row className="fluid g-0">
                    <Col className="g-0 m-auto">
                        <Herosection />
                    </Col>
                </Row>
            </Container>
        
    );
};

export default Header;