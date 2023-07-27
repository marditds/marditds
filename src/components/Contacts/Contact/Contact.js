import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RxEnvelopeClosed } from 'react-icons/rx';

export const Contact = () => {

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
                        <Row className='mt-2 '>
                            <Col xs={12} md={6} className='d-flex justify-content-center'>
                                <Link className='d-grid cntcts--link' to={`mailto:${email}`}>
                                    <RxEnvelopeClosed className='mx-auto cntcts--icon email' size={widthSize.width > 575 ? 50 : 30} />
                                    marditds@gmail.com
                                </Link>
                            </Col>
                            <Col xs={12} md={6} className='mt-4 mt-md-0 d-flex justify-content-center'>
                                <Link
                                    to={'https://www.linkedin.com/in/mardit-dersoukiassian/'}
                                    target='_blank'
                                    className='d-grid cntcts--link'>
                                    <SlSocialLinkedin className='mx-auto cntcts--icon linkedin' size={57} />
                                    /mardit-dersoukiassian
                                </Link>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </Container>
        </div>
    )
}
