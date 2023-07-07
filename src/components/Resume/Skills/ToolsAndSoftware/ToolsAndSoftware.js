import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide, SiVisualstudio } from 'react-icons/si';
import './ToolsAndSoftware.css';

export const ToolsAndSoftware = () => {
    return (
        <Row className='justify-content-center mt-3 mb-4'>
            <Row xs={2} sm={3} className='icon--row'>
                <Col className='icon--col'>
                    <SiGithub size={55} />
                    GitHub
                </Col>
                <Col className='icon--col'>
                    <SiJira size={55} />
                    Jira
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    < SiFigma size={55} />
                    Figma
                </Col>
                <Col className='icon--col my-4 my-sm-0 d-grid d-sm-none'>
                    <SiGitlab size={55} />
                    GitLab
                </Col>
            </Row>
            <Row xs={2} sm={3} className='my-sm-4 icon--row'>
                <Col className='icon--col d-none d-sm-grid'>
                    <SiGitlab size={55} />
                    GitLab
                </Col>
                <Col className='icon--col'>
                    <SiVisualstudiocode size={55} />
                    Visual Studio Code
                </Col>
                <Col className='icon--col' >
                    <SiAdobedreamweaver size={55} />
                    Adobe Dreamweaver
                </Col>
            </Row>
            <Row xs={2} sm={3} className='icon--row'>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiAdobephotoshop size={55} />
                    Adobe Photoshop
                </Col>
                <Col className='icon--col my-4 my-sm-0'>
                    <SiEclipseide size={55} />
                    Eclipse
                </Col>
            </Row>
        </Row>
    )
}
