import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import { PiLinkedinLogo } from 'react-icons/pi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { SiLinkedin } from 'react-icons/si';

export const Contacts = () => {
    return (
        <div id='contacts' className='contacts--content'>
            <Container fluid className='cntcts--row'>
                <Container>
                    <section>
                        <h3>Contacts</h3>
                        <Row className='mt-3'>
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
