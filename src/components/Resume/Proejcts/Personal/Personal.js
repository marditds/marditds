import React from 'react';
import './Personal.css';
import { personalData } from '../../../../data/personalData';
import { Project } from '../Project/Project';

export const Personal = () => {

    return (
        <>
            <Project data={personalData} />
        </>
    )

}
