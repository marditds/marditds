import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Skills.css';
import { Programming } from './Programming/Programming';
import { ToolsAndSoftware } from './ToolsAndSoftware/ToolsAndSoftware';

export const Skills = () => {
    return (
        <>
            <section>
                <h3 className='mb-0 pb-0'>Programming Languages</h3>
                <Programming />
            </section>

            <section>
                <h3 className='mb-0 pb-0'>Tools & Software</h3>
                <ToolsAndSoftware />
            </section>
        </>
    )
}
