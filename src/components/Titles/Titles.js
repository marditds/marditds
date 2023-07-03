import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { titlesData } from './titlesData';

export const Titles = () => {

    const [titles, setTitles] = useState(titlesData);
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <Row>
            <Col>I'm a {
                titles.map((title, idx) => {
                    return (
                        <span key={idx}>{title} </span>)
                })
            }
            </Col>
        </Row>
    )
}
