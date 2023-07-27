import React from 'react';
import './Resume.css';
import { Skills } from './Skills/Skills';
import { Education } from './Education/Education';
import { Projects } from './Proejcts/Projects';


export const Resume = () => {
    return (

        <>
            <Skills />
            <Education />
            <Projects />
        </>
    )
}
