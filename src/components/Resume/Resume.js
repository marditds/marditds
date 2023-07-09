import React from 'react';
import './Resume.css';
import { Skills } from './Skills/Skills';
import { Education } from './Education/Education';
import { Experience } from './Experience/Experience';

export const Resume = () => {
    return (

        <>

            <Skills />
            <Education />
            {/* <Experience /> */}

        </>
    )
}
