import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const header = (props) => {

    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <Container style={{color: '#1a1633'}}>
                    <Row className="justify-content-center">
                        <Col lg="12" md="12" className="align-self-center text-center">
                            <h1 className="title">LIVE SUNSETS</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default header;