import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide } from 'react-icons/si';
import './ToolsAndSoftware.css';

export const ToolsAndSoftware = () => {
    return (
        <Row className='justify-content-center mt-3 mb-4'>
            <Row xs={2} sm={3} className='icon--row'>
                <Col className='icon--col'>
                    <SiGithub size={55} />
                    <p>GitHub</p>
                </Col>
                <Col className='icon--col'>
                    <SiJira size={55} />
                    <p>Jira</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    < SiFigma size={55} />
                    <p>Figma</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0 d-grid d-sm-none'>
                    <SiGitlab size={55} />
                    <p>GitLab</p>
                </Col>
            </Row>
            <Row xs={2} sm={3} className='my-sm-4 icon--row'>
                <Col className='icon--col d-none d-sm-grid'>
                    <SiGitlab size={55} />
                    <p>GitLab</p>
                </Col>
                <Col className='icon--col'>
                    <SiVisualstudiocode size={55} />
                    <p>Visual Studio Code</p>
                </Col>
                <Col className='icon--col' >
                    <SiAdobedreamweaver size={55} />
                    <p>Adobe Dreamweaver</p>
                </Col>
            </Row>
            <Row xs={2} sm={3} className='icon--row'>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiAdobephotoshop size={55} />
                    <p>Adobe Photoshop</p>
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiEclipseide size={55} />
                    <p>Eclipse</p>
                </Col>
            </Row>
        </Row >
    )
}
