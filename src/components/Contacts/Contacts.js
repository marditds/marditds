import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxEnvelopeClosed } from 'react-icons/rx';

export const Contacts = () => {

    const [widthSize, setWidthSize] = useState({ width: window.innerWidth });

    const email = 'marditds@gmail.com';

    useEffect(() => {
        const handleResize = () => setWidthSize({ width: window.innerWidth });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div id='contacts' className='contacts--content'>
            <Container fluid className='cntcts--row'>
                <Container>
                    <section>
                        <h3>Contacts</h3>
                        <Row className='mt-2 d-grid'>
                            <Col>
                                You can email me at
                                <Link className='ms-2 email--link' to={`mailto:${email}`}>
                                    marditds@gmail.com
                                    <RxEnvelopeClosed className='email--icon ms-2' size={widthSize.width > 575 ? 35 : 30} />
                                </Link>
                            </Col>
                            <Col>
                                Send me a message on LinkedIn and let's connect! <br />
                                {/* <PiLinkedinLogo size={35} /> */}
                                <Link
                                    to={'https://www.linkedin.com/in/mardit-dersoukiassian/'}
                                    className='cntcts--link'>
                                    <SlSocialLinkedin className='cntcts--icon linkedin' size={57} />
                                    {/* <SiLinkedin className='cntcts--icon linkedin' size={57} fill='black' /> */}
                                </Link>
                                {/* <SiLinkedin size={35} /> */}
                            </Col>

                        </Row>
                    </section>
                </Container>
            </Container>
        </div>
    )
}
