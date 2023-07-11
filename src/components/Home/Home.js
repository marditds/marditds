import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { Titles } from './Titles/Titles';
import { LuChevronDown, LuChevronsDown } from 'react-icons/lu';
import { PiEnvelopeThin, PiEnvelopeOpenThin } from 'react-icons/pi';
import { RxEnvelopeClosed, RxEnvelopeOpen } from 'react-icons/rx';
import { Resume } from '../Resume/Resume';
import { Contacts } from '../Contacts/Contacts';
import './Home.css';

export const Home = () => {

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

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCntctIcn(preVal => (preVal.type === RxEnvelopeOpen ? <RxEnvelopeClosed className='mail closed' size={35} /> : <RxEnvelopeOpen className='mail open' size={35} />));
    //     }, 500);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [])

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
                </div>
            </Container>
            <Resume />
            <Contacts />

        </>
    )
}
