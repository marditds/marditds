import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReact, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import './Programming.css';

export const Programming = () => {
    return (
        <Row className='justify-content-evenly mt-3 mb-4'>

            <Row xs={2} sm={3}>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiReact size={55} />
                    <p>ReactJS</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiBootstrap size={55} />
                    <p>Bootstrap</p>
                </Col>
                <Col className='icon--col'>
                    <SiHtml5 size={55} />
                    <p>HTML5</p>
                </Col>
                <Col className='icon--col d-grid d-sm-none'>
                    <SiCss3 size={55} />
                    <p>CSS3</p>
                </Col>
            </Row>
            <Row xs={2} sm={3} className='my-sm-4'>
                <Col className='icon--col d-none d-sm-grid'>
                    <SiCss3 size={55} />
                    <p>CSS3</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiJavascript size={55} />

                    <p>JavaScript</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    < SiNodedotjs size={55} />

                    <p>NodeJS</p>
                </Col>
            </Row>
            <Row xs={2} sm={3}>
                <Col className='icon--col'>
                    <SiPhp size={55} />

                    <p>PHP</p>
                </Col>
                <Col className='icon--col'>
                    <SiMysql size={55} />

                    <p>MySQL</p>
                </Col>
                <Col className='icon--col mt-4 my-sm-0'>
                    <BiLogoJava size={55} />
                    <p>Java</p>
                </Col>
            </Row>
        </Row>

    )
}
