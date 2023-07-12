import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';
import './Academic.css';
import { academicData } from '../../../../data/academicData';

export const Academic = () => {

    const [acadData, setAcadData] = useState(academicData);

    return (
        <Row>
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
                                    <p>{item.title}</p>
                                </Link>
                            </Col>
                            <Col></Col>
                        </Row>
                    )
                })
            }
        </Row>
    )
}
