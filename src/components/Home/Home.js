import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { Titles } from '../Titles/Titles';
import { LuChevronDown } from 'react-icons/lu';
import { Resume } from '../Resume/Resume';
import './Home.css';

export const Home = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsCicked] = useState(false);

    const handleReadMore = () => {
        setIsExpanded((preVal) => !preVal);
        setIsCicked((preVal) => !preVal);
    }

    const handleIconClick = () => {
        const resumeContent = document.getElementById('resume');

        if (resumeContent) {
            window.scrollTo({
                top: resumeContent.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container>
            <div className='home--content'>
                <div>
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

                    <p className='mt-5'>
                        Check out my resume and skills here.
                        <Link to={{
                            pathname: '/',
                            hash: '#resume',
                        }}
                            onClick={handleIconClick}
                        >
                            <LuChevronDown
                                size={20}
                                className='resume--icon position-absolute'
                            />
                        </Link>
                    </p>


                </div>
            </div>

            <Resume />

        </Container>
    )
}
