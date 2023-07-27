import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide } from 'react-icons/si';
import './ToolsAndSoftware.css';

export const ToolsAndSoftware = () => {

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
        <Row className='justify-content-center mt-3 mb-4'>
            <Row xs={3} className='icon--row'>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiGithub size={screenSize.width > 575 ? 55 : 40} />
                    <p>GitHub</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiJira size={screenSize.width > 575 ? 55 : 40} />
                    <p>Jira</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    < SiFigma size={screenSize.width > 575 ? 55 : 40} />
                    <p>Figma</p>
                </Col>
                {/* <Col className='icon--col my-4 my-sm-0 d-grid d-sm-none'>
                    <SiGitlab size={screenSize.width > 575 ? 55 : 40} />
                    <p>GitLab</p>
                </Col> */}
            </Row>
            <Row xs={3} className='my-sm-4 icon--row'>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiGitlab size={screenSize.width > 575 ? 55 : 40} />
                    <p>GitLab</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0'>
                    <SiVisualstudiocode size={screenSize.width > 575 ? 55 : 40} />
                    <p>Visual Studio Code</p>
                </Col>
                <Col className='icon--col mb-4 my-sm-0' >
                    <SiAdobedreamweaver size={screenSize.width > 575 ? 55 : 40} />
                    <p>Adobe Dreamweaver</p>
                </Col>
            </Row>
            <Row xs={3} className='icon--row'>
                <Col className='icon--col'>
                    <SiAdobephotoshop size={screenSize.width > 575 ? 55 : 40} />
                    <p>Adobe Photoshop</p>
                </Col>
                <Col className='icon--col'>
                    <SiEclipseide size={screenSize.width > 575 ? 55 : 40} />
                    <p>Eclipse</p>
                </Col>
            </Row>
        </Row >
    )
}
