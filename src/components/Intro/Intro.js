import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { Titles } from './Titles/Titles';
import { LuChevronDown, LuChevronsDown } from 'react-icons/lu';
import { RxEnvelopeClosed, RxEnvelopeOpen } from 'react-icons/rx';
import './Intro.css';

export const Intro = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [isClicked, setIsCicked] = useState(false);
    const [cntctIcn, setCntctIcn] = useState(<RxEnvelopeClosed size={35} className='mail' />)

    const handleReadMore = () => {
        setIsExpanded((preVal) => !preVal);
        setIsCicked((preVal) => !preVal);
    }

    const handleIconClick = (targetId) => (event) => {
        // event.preventDefault();

        const targetElement = document.getElementById(targetId);
        // const skills = document.getElementById('skills'); 

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
        // if (skills) {
        //     window.scrollTo({
        //         top: skills.offsetTop,
        //         behavior: 'smooth',
        //     });
        // } 
    };

    return (
        <div id='intro' className='intro--content'>
            <Container fluid className='intro--mother--container'>
                <div>
                    <div className='d-flex align-items-center mb-2'>
                        <p className={`my-0 d-flex align-items-center hire--me--txt ${!isExpanded ? '' : 'expanded'}`}>
                            Hi <span className={!isExpanded ? 'd-flex' : "d-none"}>!</span>
                            <span className={!isExpanded ? 'd-none' : 'd-flex'}>re me!</span>
                            <br />

                        </p>
                        <Button
                            onClick={handleReadMore}
                            className={`py-0 intro--read--more--btn ${isClicked ? 'clicked' : ''}`}
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
                            onClick={handleIconClick('skills')}
                        >
                            <LuChevronDown
                                size={24}
                                className='resume--icon position-absolute'
                            />
                        </Link>
                    </p>
                    <p className='mt-2 check--education--txt'>
                        Check out my education below that.
                        <Link to={{
                            pathname: '/',
                            hash: '#education',
                        }}
                            onClick={handleIconClick('education')}
                        >
                            <LuChevronsDown
                                size={24}
                                className='resume--icon position-absolute'
                            />
                        </Link>
                    </p>

                    <p className='mt-2 check--education--txt'>
                        View my projects
                        <Link to={{
                            pathname: '/',
                            hash: '#projects',
                        }}
                            onClick={handleIconClick('projects')}
                        >
                            <LuChevronsDown
                                size={24}
                                className='resume--icon position-absolute'
                            />
                        </Link>
                    </p>

                    <p className='get--in--touch--txt mt-5'>
                        <Link to={{
                            pathname: '/',
                            hash: '#contacts',
                        }}
                            onClick={handleIconClick('contacts')}
                            className=' d-flex align-items-center'
                        >
                            Let's get in touch!
                            <span className='ms-2'>
                                {cntctIcn}
                            </span>
                        </Link>
                    </p>

                </div>
            </Container>
        </div>
    )
}
