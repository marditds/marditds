import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Education.css';

export const Education = () => {
    return (

        <section className='education--content'>
            <h3>Education</h3>
            <Row>
                <Col>
                    <Col xs={12} sm={8}>
                        <span className='fw-bold hakop'>Bachelor of Science in Computer Science</span>
                    </Col>
                    <Col>
                        <Link to={`https://www.csun.edu`} target='_blank'>
                            California State University, Northridge (CSUN)
                        </Link>
                    </Col>
                </Col>
                <Col xs={12} sm={4} className='d-flex justify-content-end'>August 2022</Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Col xs={12} sm={8}>
                        <span className='fw-bold'>Associate of Science in Web Development</span>
                    </Col>
                    <Col>
                        <Link to={`https://www.glendale.edu`} target='_blank'>
                            Glendale Community College
                        </Link>
                    </Col>
                </Col>
                <Col xs={12} sm={4} className='d-flex justify-content-end'>August 2020</Col>
            </Row>
        </section>

    )
}
