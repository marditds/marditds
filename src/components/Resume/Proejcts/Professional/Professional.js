import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import './Professional.css';
import { professionalData } from '../../../../data/professionalData';

export const Professional = () => {

    const [profData, setProfData] = useState(professionalData);

    useEffect(() => {
        setProfData(preVal => preVal)
    }, [])

    console.log(profData);

    return (
        <Row>
            <Row>
                {
                    profData.map((item, index) => {
                        <Col key={index}>
                            <Link to={item.url} target='_blank'>
                                {/* <Image src={item.avatar} fluid /> */}
                                <p>{item.title}</p>
                            </Link>
                        </Col>
                    })
                }

            </Row>
        </Row>
    )
}
