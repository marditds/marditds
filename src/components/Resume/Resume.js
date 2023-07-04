import React from 'react';
import './Resume.css';
import { Row } from 'react-bootstrap';
import { Skills } from './Skills/Skills';
import { Education } from './Education/Education';

export const Resume = () => {
    return (
        <Row id='resume' >

            <Skills />
            <Education />

        </Row>
    )
}
