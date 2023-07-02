import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css';

export const Home = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsCicked] = useState(false);

    const handleReadMore = () => {
        setIsExpanded((preVal) => !preVal);
        setIsCicked((preVal) => !preVal);
    }

    return (
        <Container>
            <p className="d-flex align-items-center">
                Hi
                <span className={!isExpanded ? 'd-none' : 'd-flex'}>re me!</span>
                <br />
                <Button
                    onClick={handleReadMore}
                    className={`ms-2 home--read--more--btn ${isClicked ? 'clicked' : ''}`}
                >
                    Read {!isExpanded ? 'More' : 'Less'}
                </Button>
            </p>
        </Container >
    )
}
