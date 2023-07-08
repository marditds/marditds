import React from 'react';
import './Resume.css';
import { Row } from 'react-bootstrap';
import { Skills } from './Skills/Skills';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';

export const Resume = () => {
    return (
        <div id='resume' >

            <Skills />
            <Education />
            <Experience />

        </div>
    )
}
