import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';
import './Academic.css';
import { academicData } from '../../../../data/academicData';

export const Academic = () => {

    const [acadData, setAcadData] = useState(academicData);

    return (
        // <Row>
        <Col className='mt-4 mt-md-0'>
            {
                acadData.map((item, index) => {
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
        // </Row>
    )
}
