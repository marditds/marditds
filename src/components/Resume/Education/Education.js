import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Education.css';
import CSUNLogo from '../../../assets/csunCSLogo.png';
import { RiComputerLine } from 'react-icons/ri';
import { PiComputerTowerBold } from 'react-icons/pi';
import { PiComputerTower } from 'react-icons/pi';

export const Education = () => {
    return (
        <Container fluid className='education--row pt-3 pb-3'>
            <Container>
                <section className='education--content'>
                    <h3>Education</h3>
                    <Row>
                        <Col>
                            <Col xs={12} sm={8}>
                                <h5 className='fw-bold mb-0'>
                                    Bachelor of Science in Computer Science
                                    <RiComputerLine
                                        className='education--icon'
                                        size={35} />
                                    <PiComputerTowerBold
                                        className='education--icon'
                                        size={35} />
                                </h5>
                            </Col>
                            <Col>
                                <Link to={`https://www.csun.edu`} target='_blank'>
                                    <Image src={CSUNLogo} className='school--logo' fluid />
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
            </Container>
        </Container>
    )
}
