import React from 'react';
import './Professional.css';
import { professionalData } from '../../../../data/professionalData';
import { Project } from '../Project/Project';

export const Professional = () => {

    return (
        <>
            <Project data={professionalData} />
        </>
    )

}
