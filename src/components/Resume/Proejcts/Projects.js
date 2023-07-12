import React from 'react';
import './Projects.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Academic } from './Academic/Academic';
import { Professional } from './Professional/Professional';

export const Projects = () => {
    return (
        <div id='projects' className='prjcts--content'>
            <Container fluid className='prfssnl--row'>
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
        </div>
    )
}
