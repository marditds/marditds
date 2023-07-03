import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Titles } from '../Titles/Titles';
import { LuChevronDown } from 'react-icons/lu';

import './Home.css';

export const Home = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsCicked] = useState(false);

    const handleReadMore = () => {
        setIsExpanded((preVal) => !preVal);
        setIsCicked((preVal) => !preVal);
    }




    return (
        <Container className='hire--me--container'>
            <p className="d-flex align-items-center">
                Hi <span className={!isExpanded ? 'd-flex' : "d-none"}>!</span>
                <span className={!isExpanded ? 'd-none' : 'd-flex'}>re me!</span>
                <br />
                <Button
                    onClick={handleReadMore}
                    className={`home--read--more--btn ${isClicked ? 'clicked' : ''}`}
                >
                    Read {!isExpanded ? 'More' : 'Less'}
                </Button>
            </p>

            <Titles />

            <p>
                Check out my resume and skills here.
                <LuChevronDown
                    size={20}
                    className='resume--icon'
                />
            </p>

        </Container>
    )
}