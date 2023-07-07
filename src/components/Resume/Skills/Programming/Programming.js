import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReact, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import './Programming.css';

export const Programming = () => {
    return (
        <Row className='justify-content-center mt-3 mb-4'>

            <Row xs={2} sm={3}>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiReact size={55} />
                    <SiReact size={55} />
                    ReactJS
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiBootstrap size={55} />
                    <SiBootstrap size={55} />
                    Bootstrap</Col>
                <Col className='icon--col'>
                    <SiHtml5 size={55} />
                    <SiHtml5 size={55} />
                    HTML5
                </Col>
                <Col className='icon--col d-grid d-sm-none'>
                    <SiCss3 size={55} />
                    <SiCss3 size={55} />
                    CSS3
                </Col>
            </Row>
            <Row xs={2} sm={3} className='my-sm-4'>
                <Col className='icon--col d-none d-sm-grid'>
                    <SiCss3 size={55} />
                    <SiCss3 size={55} />
                    CSS3
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiJavascript size={55} />
                    <SiJavascript size={55} />
                    JavaScript
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    < SiNodedotjs size={55} />
                    < SiNodedotjs size={55} />
                    NodeJS
                </Col>
            </Row>
            <Row xs={2} sm={3}>
                <Col className='icon--col'>
                    <SiPhp size={55} />
                    <SiPhp size={55} />
                    PHP
                </Col>
                <Col className='icon--col'>
                    <SiMysql size={55} />
                    <SiMysql size={55} />
                    MySQL
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <BiLogoJava size={55} />
                    <BiLogoJava size={55} />
                    Java
                </Col>
            </Row>
        </Row>

    )
}
