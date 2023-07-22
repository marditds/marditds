import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Academic } from './Academic/Academic';
import { Professional } from './Professional/Professional';
import { Personal } from './Personal/Personal';
import { LuChevronsDown } from 'react-icons/lu';

export const Projects = () => {

    const handleIconClick = (targetId) => () => {
        // event.preventDefault();

        const targetElement = document.getElementById(targetId);
        // const skills = document.getElementById('skills'); 

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
        // if (skills) { 
    };

    return (
        <div id='projects' className='prjcts--content'>
            <Container fluid>
                <Container>
                    <h3>My Projects</h3>
                    <Row xs={1} md={2} lg={3} className='mt-2 mt-lg-5'>
                        <Professional />
                        <Academic />
                        <Personal />
                    </Row>
                </Container>
            </Container>
            <Container fluid className='cntn--btn--row'>
                <Container>
                    <Row className=''>
                        <Col className='text-end'>
                            <Link to={{
                                pathname: '/',
                                hash: '#contacts',
                            }}
                                onClick={handleIconClick('contacts')}
                            >
                                <Button>Contact Me
                                    <LuChevronsDown
                                        size={24}
                                    />
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* <Container fluid className='prfssnl--row'>
                <Container>
                    <section>
                        <h3 className=''>Professional Projects</h3>
                        <Professional />
                    </section>
                </Container>
            </Container >
            <Container fluid className='acdmc--row'>
                <Container>
                    <section>
                        <h3 className=''>Academic Projects</h3>
                        <Academic />
                    </section>
                </Container>
            </Container >
            <Container fluid className='prsnl--row'>
                <Container>
                    <section>
                        <h3 className=''>Personal Projects</h3>
                        <Personal />
                    </section>
                </Container>
            </Container > */}
        </div>
    )
}
