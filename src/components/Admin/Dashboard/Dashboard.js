import React, { useContext, useEffect, useState } from 'react';
import Navbars from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, Alert } from 'react-bootstrap';
import './Dashboard.css';
import AddPost from '../AddPost/AddPost';

const Dashboard = () => {
    const shortPost = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    }

    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Navbars />
                </Col>
            </Row>
            <Row className="d-flex mt-5 justify-content-center">
                <Col sm={2} className="leftSide" >
                    <div >
                        <div className="mt-5 text-light">
                            <h3>JSONPLACEHOLDER</h3>
                            <h4>BLOG</h4>
                            <h5></h5>
                        </div>
                    </div>
                </Col>
                <Col sm={10} className="mainContent">
                    <Row className="justify-content-center">
                        <Col md={10} className="g-5 justify-content-center p-2">
                            <AddPost/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;