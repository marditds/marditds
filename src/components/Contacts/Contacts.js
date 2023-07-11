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
                        <Row className='mt-5'>
                            <Col>
                                {/* <PiLinkedinLogo size={35} /> */}
                                <Link to={'https://www.linkedin.com/in/mardit-dersoukiassian/'}>
                                    <SlSocialLinkedin className='cntcts--icon linkedin' size={57} />
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
