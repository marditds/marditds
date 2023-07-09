import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Education.css';
import CSUNLogo from '../../../assets/csunCSLogo.png';
import { RiComputerLine } from 'react-icons/ri';
import { PiComputerTowerBold } from 'react-icons/pi';

export const Education = () => {

    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div id='education'>
            <Container fluid className='education--row pt-3 pb-3 education--content'>
                <Container>
                    <section className=''>
                        <h3>Education</h3>
                        <Row>
                            <Col>
                                <Col xs={12} sm={8}>
                                    <p className='fw-bold d-flex align-items-end mb-0'>
                                        <span className='d-none d-sm-inline'>
                                            Bachelor of Science{" "}
                                        </span>
                                        <span className='d-inline d-sm-none'>
                                            BS{" "}
                                        </span>
                                        in Computer Science

                                        <span className='d-inline-block'>
                                            <RiComputerLine
                                                className='education--icon'
                                                size={screenSize.width > 575 ? 35 : 25} />
                                            <PiComputerTowerBold
                                                className='education--icon'
                                                size={screenSize.width > 575 ? 35 : 25} />
                                        </span>
                                    </p>
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
                                    <p className='fw-bold'>Associate of Science in Web Development</p>
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
        </div>
    )
}
