import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Skills.css';
import { LuChevronsDown } from 'react-icons/lu';
import { Programming } from './Programming/Programming';
import { ToolsAndSoftware } from './ToolsAndSoftware/ToolsAndSoftware';

export const Skills = () => {

    const handleIconClick = (targetId) => (event) => {
        // event.preventDefault();

        const targetElement = document.getElementById(targetId);
        // const skills = document.getElementById('skills');
        // const education = document.getElementById('education');


        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
        // if (skills) {
        //     window.scrollTo({
        //         top: skills.offsetTop,
        //         behavior: 'smooth',
        //     });
        // }

        // if (education) {
        //     window.scrollTo({
        //         top: education.offsetTop,
        //         behavior: 'smooth',
        //     })
        // }
    };

    return (
        <div id='skills' className='skills--content'>
            <Container fluid className='prgrm--row'>
                <Container>
                    <section>
                        <h3 className=''>Programming Languages</h3>
                        <Programming />
                    </section>
                </Container>
            </Container>

            <Container fluid className='tools--row'>
                <Container>
                    <section>
                        <h3 className=''>Tools & Software</h3>
                        <ToolsAndSoftware />
                    </section>
                </Container>
            </Container >
            <Container fluid className='cntn--btn--row'>
                <Container>
                    <Row className=''>
                        <Col className='d-none d-sm-block'></Col>
                        <Col className=''></Col>
                        <Col className='d-flex justify-content-center'>
                            <Link to={{
                                pathname: '/',
                                hash: '#education',
                            }}
                                onClick={handleIconClick('education')}
                            >
                                <Button>See Education
                                    <LuChevronsDown
                                        size={24}
                                    />
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div >
    )
}
