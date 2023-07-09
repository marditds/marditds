import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Education.css';
import CSUNLogo from '../../../assets/csunCSLogo.png';
// import { RiComputerLine } from 'react-icons/ri';
import { PiDesktop, PiComputerTower, PiCertificate, PiCertificateBold } from 'react-icons/pi';
import { TbFileCertificate } from 'react-icons/tb';

export const Education = () => {

    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <div id='education'>
            <Container fluid className='education--row pt-3 pb-3 education--content'>
                <Container>
                    <section className=''>
                        <h3>Education</h3>

                        <p>I have a Bachelor's degree
                            <span className='degree--icon'>
                                <PiCertificate
                                    size={screenSize.width > 575 ? 35 : 25} />
                            </span>
                            in Computer Science
                            <span className='education--icon'>
                                <PiDesktop
                                    size={screenSize.width > 575 ? 35 : 25} />
                                <PiComputerTower
                                    // className='education--icon'
                                    size={screenSize.width > 575 ? 35 : 25} />
                            </span>
                            from California State University - Northridge
                            <Link to={'https://www.csun.edu/'} target='_blank'>
                                <Image src={CSUNLogo} className='school--logo' fluid />
                            </Link>
                            . I also have an Associate of Science degree
                            <span>
                                <TbFileCertificate className='degree--icon'
                                    size={screenSize.width > 575 ? 35 : 25} />
                            </span>
                            from Glendale Community College.</p>
                    </section>
                </Container>
            </Container>
        </div>
    )
}
