import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Education.css';
import CSUNLogo from '../../../assets/csunCSLogo.png';
import gccLogo from '../../../assets/gccLogo.png';
// import { RiComputerLine } from 'react-icons/ri';
import { PiDesktop, PiComputerTower, PiCertificate, PiFileCode, PiMathOperations } from 'react-icons/pi';
import { TbFileCertificate } from 'react-icons/tb';
import { LuChevronsDown } from 'react-icons/lu';

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


    const handleIconClick = (targetId) => () => {
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

        <div id='education' className='education--content'>
            <Container fluid className='education--row pt-3 pb-3'>
                <Container>
                    <section className=''>
                        <h3>Education</h3>

                        <p>I hold a
                            <span className='bs--span'>
                                Bachelor's degree
                                <span>
                                    <PiCertificate className='degree--icon'
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                                in Computer Science
                                <span>
                                    <PiDesktop
                                        className='education--icon'
                                        size={screenSize.width > 575 ? 35 : 25} />
                                    <PiComputerTower
                                        className='education--icon'
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                            </span>
                            from California State University - Northridge
                            <Link to={'https://www.csun.edu/'} target='_blank'>
                                <Image src={CSUNLogo} className='school--logo' fluid />
                            </Link>. In addition to this, I have also obtained an
                            <span className='as--span'>
                                Associate of Science degree
                                <span>
                                    <TbFileCertificate className='degree--icon'
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                                in Web Development
                                <span className='education--icon'>
                                    <PiFileCode
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                            </span>
                            and another
                            <span className='as--span'>
                                Associate of Science degree
                                <span>
                                    <TbFileCertificate className='degree--icon'
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                                in Mathematics
                                <span className='education--icon'>
                                    <PiMathOperations
                                        size={screenSize.width > 575 ? 35 : 25} />
                                </span>
                            </span>
                            {' '}from Glendale Community College
                            <Link to={'https://www.glendale.edu/'} target='_blank'>
                                <Image src={gccLogo} className='school--logo' fluid />
                            </Link>.</p>

                        {/* <p>I have a Bachelor's degree
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
                            in Web Development
                            <span className='education--icon'>
                                <PiFileCode
                                    size={screenSize.width > 575 ? 35 : 25} />
                            </span>
                            from Glendale Community College
                            <Link to={'https://www.glendale.edu/'} target='_blank'>
                                <Image src={gccLogo} className='school--logo' fluid />
                            </Link>.
                            In addition that, I have an Associates of Sicence degree in Mathematics
                            <span className='education--icon'>
                                <PiMathOperations
                                    size={screenSize.width > 575 ? 35 : 25} />
                            </span>
                            from Glendale Community College.
                        </p> */}
                    </section>
                </Container>
            </Container>
            <Container fluid className='cntn--btn--row'>
                <Container>
                    <Row className=''>
                        <Col className='text-end'>
                            <Link to={{
                                pathname: '/',
                                hash: '#projects',
                            }}
                                onClick={handleIconClick('projects')}
                            >
                                <Button>See My Projects
                                    <LuChevronsDown
                                        size={24}
                                    />
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
