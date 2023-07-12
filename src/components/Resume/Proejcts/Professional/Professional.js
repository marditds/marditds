import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import './Professional.css';
import { professionalData } from '../../../../data/professionalData';

export const Professional = () => {

    const [profData, setProfData] = useState(professionalData);

    // useEffect(() => {
    //     setProfData(preVal => preVal)
    // })

    return (
        <Row>
            {
                profData.map((item, index) => {
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
