import React from 'react';
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
                        <Row>
                            <Col>
                                {/* <PiLinkedinLogo size={35} /> */}
                                <SlSocialLinkedin className='cntcts--icon linkedin' size={40} />
                                {/* <SiLinkedin size={35} /> */}
                            </Col>
                        </Row>
                    </section>
                </Container>
            </Container>
        </div>
    )
}
