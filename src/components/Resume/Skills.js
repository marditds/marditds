import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SiReact, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiPhp, SiMysql, SiGithub, SiJira, SiFigma, SiGitlab, SiVisualstudiocode, SiAdobedreamweaver, SiAdobephotoshop, SiEclipseide, SiVisualstudio } from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';

export const Skills = () => {
    return (
        <>
            <Row>
                <h3>Programming Languages</h3>
                <Row>
                    <Col className='text-center my-2'><SiReact size={70} /></Col>
                    <Col className='text-center my-2'><SiBootstrap size={70} /></Col>
                    <Col className='text-center my-2'><SiHtml5 size={70} /></Col>
                </Row>
                <Row>
                    <Col className='text-center my-2'><SiCss3 size={70} /></Col>
                    <Col className='text-center my-2'><SiJavascript size={70} /></Col>
                    <Col className='text-center my-2'>< SiNodedotjs size={70} /></Col>
                </Row>
                <Row>
                    <Col className='text-center my-2'><SiPhp size={70} /></Col>
                    <Col className='text-center my-2'><SiMysql size={70} /></Col>
                    <Col className='text-center my-2'><BiLogoJava size={70} /></Col>
                </Row>
            </Row>
            <Row>
                <h3>Tools & Software</h3>
                <Row>
                    <Col className='text-center my-2'><SiGithub size={70} /></Col>
                    <Col className='text-center my-2'><SiJira size={70} /></Col>
                    <Col className='text-center my-2'>< SiFigma size={70} /></Col>
                </Row>
                <Row>
                    <Col className='text-center my-2'><SiGitlab size={70} /></Col>
                    <Col className='text-center my-2'><SiVisualstudiocode size={70} /></Col>
                    <Col className='text-center my-2'><SiAdobedreamweaver size={70} /></Col>
                </Row>
                <Row>
                    <Col className='text-center  my-2'><SiAdobephotoshop size={70} /></Col>
                    <Col className='text-center  my-2'><SiEclipseide size={70} /></Col>
                    <Col className='text-center  my-2'><SiVisualstudio size={70} /></Col>
                </Row>
            </Row>
            <Row>
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
            </Row>
        </>
    )
}
