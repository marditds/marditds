import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';
import './Personal.css';
import { personalData } from '../../../../data/personalData';

export const Personal = () => {

    const [personData, setPersonData] = useState(personalData);

    return (
        // <Row>
        <Col className='mt-4 mt-lg-0'>
            {
                personData.map((item, index) => {
                    return (
                        <Row key={index}>
                            <Col
                                className={`${item.id}--col`}
                            >
                                <Link
                                    to={item.url}
                                    target='_blank'
                                    className={`${item.id}--link`}
                                >
                                    <Image
                                        src={item.avatar}
                                        className={`${item.id}--logo`}
                                        fluid
                                    />
                                    <h5 className='mb-0 text-center'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </Link>
                            </Col>
                        </Row>
                    )
                })
            }
        </Col>
        // {/* </Row> */}
    )
}
