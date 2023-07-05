import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide, SiVisualstudio } from 'react-icons/si';
import './Skills.css';
import { Programming } from './Programming/Programming';

export const Skills = () => {
    return (
        <>
            <Row>
                <h3>Programming Languages</h3>

                <Programming />

            </Row>
            <Row>
                <h3>Tools & Software</h3>
                <Row xs={2} sm={3}>
                    <Col className='icon--col my-4'><SiGithub size={55} />GitHub</Col>
                    <Col className='icon--col my-4'><SiJira size={55} />Jira</Col>
                    <Col className='icon--col my-4'>< SiFigma size={55} />Figma</Col>
                    <Col className='icon--col my-4 d-grid d-sm-none'><SiGitlab size={55} />GitLab</Col>
                </Row>
                <Row xs={2} sm={3}>
                    <Col className='icon--col my-4 d-none d-sm-grid'><SiGitlab size={55} />GitLab</Col>
                    <Col className='icon--col my-4'><SiVisualstudiocode size={55} />Visual Studio Code</Col>
                    <Col className='icon--col my-4'><SiAdobedreamweaver size={55} />Adobe Dreamweaver</Col>
                </Row>
                <Row xs={2} sm={3}>
                    <Col className='icon--col my-4'><SiAdobephotoshop size={55} />Adobe Photoshop</Col>
                    <Col className='icon--col my-4'><SiEclipseide size={55} />Eclipse</Col>
                </Row>
            </Row>
            {/* <Row>
                <h3>Trainings and Certificates</h3>
                <Row>
                    <Col>Mentor Collective</Col>
                </Row>
            </Row>
            <Row>
                <h3>Languages</h3>
                <Row>
                    <Col>English</Col>
                    <Col>Armenian</Col>
                    <Col>Persian</Col>
                </Row>
            </Row> */}
        </>
    )
}
