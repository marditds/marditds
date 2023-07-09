import React from 'react';
import { Container } from 'react-bootstrap';
import './Skills.css';
import { Programming } from './Programming/Programming';
import { ToolsAndSoftware } from './ToolsAndSoftware/ToolsAndSoftware';

export const Skills = () => {
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
        </div >
    )
}
