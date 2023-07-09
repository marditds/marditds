import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { Titles } from './Titles/Titles';
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
        const skills = document.getElementById('skills');

        if (skills) {
            window.scrollTo({
                top: skills.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Container fluid className='p-0'>
                <div className='home--content'>
                    <div>
                        <div className='d-flex align-items-center mb-2'>
                            <p className={`my-0 d-flex align-items-center hire--me--txt ${!isExpanded ? '' : 'expanded'}`}>
                                Hi <span className={!isExpanded ? 'd-flex' : "d-none"}>!</span>
                                <span className={!isExpanded ? 'd-none' : 'd-flex'}>re me!</span>
                                <br />

                            </p>
                            <Button
                                onClick={handleReadMore}
                                className={`py-0 home--read--more--btn ${isClicked ? 'clicked' : ''}`}
                            >
                                Read {!isExpanded ? 'More' : 'Less'}
                            </Button>
                        </div>

                        <Titles />

                        <p className='mt-5 check--resume--txt'>
                            Check out my skills here.
                            <Link to={{
                                pathname: '/',
                                hash: '#skills',
                            }}
                                onClick={handleIconClick}
                            >
                                <LuChevronDown
                                    size={24}
                                    className='resume--icon position-absolute'
                                />
                            </Link>
                        </p>


                    </div>
                </div>
            </Container>
            <Resume />


        </>
    )
}
