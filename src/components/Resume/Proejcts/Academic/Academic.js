import React from 'react';
import './Academic.css';
import { academicData } from '../../../../data/academicData';
import { Project } from '../Project/Project';

export const Academic = () => {

    return (
        <>
            <Project data={academicData} />
        </>
    )

}
