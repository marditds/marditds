import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Title, Titles } from '../Titles/Titles'
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
        </Container>
    )
}
