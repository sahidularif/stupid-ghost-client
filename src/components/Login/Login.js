import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Admin/Navbar/Navbar';
const Login = () => {
    return (
        <Container className="g-5">
            <Row>

                <Col className="mb-5">
                    <Navbar />
                </Col>

            </Row>
            <Row className="align-items-center justify-content-center">
                <Col md={6} className="m-5 ">
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div class="row mb-3 text-center">
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>                       
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
            );
};

            export default Login;