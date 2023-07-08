import React from 'react';
import { Contianer, Row, Col, Container } from 'react-bootstrap';
import './Skills.css';
import { Programming } from './Programming/Programming';
import { ToolsAndSoftware } from './ToolsAndSoftware/ToolsAndSoftware';

export const Skills = () => {
    return (
        <>
            <Container fluid className='prgrm--row pt-3 pb-3'>
                <Container >
                    <section className=''>
                        <h3 className='mb-0 pb-0'>Programming Languages</h3>
                        <Programming />
                    </section>
                </Container>
            </Container>

            <Container fluid className='tools--row'>
                <Container >
                    <section className='pt-3 pb-3'>
                        <h3 className='mb-0 pb-0'>Tools & Software</h3>
                        <ToolsAndSoftware />
                    </section>
                </Container>
            </Container >
        </>
    )
}
