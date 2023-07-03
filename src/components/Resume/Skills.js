import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReact, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiPhp, SiMysql, SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide, SiVisualstudio } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import './Skills.css';

export const Skills = () => {
    return (
        <>
            <Row>
                <h3>Programming Languages</h3>
                <Row>
                    <Col className='icon--col my-4'><SiReact size={55} />ReactJS</Col>
                    <Col className='icon--col my-4'><SiBootstrap size={55} />Bootstrap</Col>
                    <Col className='icon--col my-4'><SiHtml5 size={55} />HTML5</Col>
                </Row>
                <Row>
                    <Col className='icon--col my-4'><SiCss3 size={55} />CSS3</Col>
                    <Col className='icon--col my-4'><SiJavascript size={55} />JavaScript</Col>
                    <Col className='icon--col my-4'>< SiNodedotjs size={55} />NodeJS</Col>
                </Row>
                <Row>
                    <Col className='icon--col my-4'><SiPhp size={55} />PHP</Col>
                    <Col className='icon--col my-4'><SiMysql size={55} />MySQL</Col>
                    <Col className='icon--col my-4'><BiLogoJava size={55} />Java</Col>
                </Row>
            </Row>
            <Row>
                <h3>Tools & Software</h3>
                <Row>
                    <Col className='icon--col my-4'><SiGithub size={55} />GitHub</Col>
                    <Col className='icon--col my-4'><SiJira size={55} />Jira</Col>
                    <Col className='icon--col my-4'>< SiFigma size={55} />Figma</Col>
                </Row>
                <Row>
                    <Col className='icon--col my-4'><SiGitlab size={55} />GitLab</Col>
                    <Col className='icon--col my-4'><SiVisualstudiocode size={55} />Visual Studio Code</Col>
                    <Col className='icon--col my-4'><SiAdobedreamweaver size={55} />Adobe Dreamweaver</Col>
                </Row>
                <Row>
                    <Col className='icon--col my-4'><SiAdobephotoshop size={55} />Adobe Photoshop</Col>
                    <Col className='icon--col my-4'><SiEclipseide size={55} />Eclipse</Col>
                    <Col className='icon--col my-4'><SiVisualstudio size={55} />Visual Studio 2019</Col>
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
