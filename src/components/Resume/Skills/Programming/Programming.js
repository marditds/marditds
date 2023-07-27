import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReact, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import './Programming.css';

export const Programming = () => {

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
        <Row className='justify-content-evenly mt-3 mb-4'>

            <Row xs={3}>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiReact size={screenSize.width > 575 ? 55 : 40} />
                    <p>ReactJS</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiBootstrap size={screenSize.width > 575 ? 55 : 40} />
                    <p>Bootstrap</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiHtml5 size={screenSize.width > 575 ? 55 : 40} />
                    <p>HTML5</p>
                </Col>
                {/* <Col className='icon--col d-grid d-sm-none'>
                    <SiCss3 size={screenSize.width > 575 ? 55 : 40} />
                    <p>CSS3</p>
                </Col> */}
            </Row>
            <Row xs={3} className='my-sm-4'>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiCss3 size={screenSize.width > 575 ? 55 : 40} />
                    <p>CSS3</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiJavascript size={screenSize.width > 575 ? 55 : 40} />

                    <p>JavaScript</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    < SiNodedotjs size={screenSize.width > 575 ? 55 : 40} />

                    <p>NodeJS</p>
                </Col>
            </Row>
            <Row xs={3}>
                <Col className='icon--col'>
                    <SiPhp size={screenSize.width > 575 ? 55 : 40} />

                    <p>PHP</p>
                </Col>
                <Col className='icon--col'>
                    <SiMysql size={screenSize.width > 575 ? 55 : 40} />

                    <p>MySQL</p>
                </Col>
                <Col className='icon--col mt-4 my-sm-0'>
                    <BiLogoJava size={screenSize.width > 575 ? 55 : 40} />
                    <p>Java</p>
                </Col>
            </Row>
        </Row>

    )
}
