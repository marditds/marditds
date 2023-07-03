import React from 'react';
import './Resume.css';
import { Row } from 'react-bootstrap';
import { Skills } from './Skills'

export const Resume = () => {
    return (
        <Row id='resume' >

            <Skills />

        </Row>
    )
}
