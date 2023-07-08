import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { titlesData } from './titlesData';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Titles.css';

export const Titles = () => {

    const [titles, setTitles] = useState(titlesData);
    const [currIdx, setCurrIdx] = useState(0);

    const handlePrevTitle = () => {
        setCurrIdx((preVal) => preVal - 1);
        if (currIdx < 1) {
            setCurrIdx((preVal) => titles.length - 1)
        }
    }

    const handleNextTitle = () => {
        setCurrIdx((preVal) => preVal + 1);
        if (currIdx > 5) {
            setCurrIdx((preVal) => 0)
        }
    }

    console.log("THIS IS INDEX: " + currIdx + " " + titles[currIdx]);


    return (
        // <Row className=' position-absolute'>
        <Row  >
            <Col className='d-flex titles--content'>
                I'm a

                <div className='position-absolute titles--div'>

                    <LuChevronLeft
                        size={25}
                        onClick={handlePrevTitle}
                        className='titles--btn left position-absolute'
                    />

                    {
                        titles.slice(currIdx, currIdx + 1).map((title, idx) => {
                            return (
                                <span key={idx} className='title--text '> {title} </span>
                            )
                        })
                    }
                    <LuChevronRight
                        size={25}
                        onClick={handleNextTitle}
                        className='titles--btn right position-absolute'
                    />

                </div>
            </Col>
        </Row>
    )
}
