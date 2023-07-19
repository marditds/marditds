import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image, Collapse, Button } from 'react-bootstrap';
import './Academic.css';
import { academicData } from '../../../../data/academicData';

export const Academic = () => {

    const [acadData, setAcadData] = useState(academicData);

    useEffect(() => {
        setAcadData(preVal => preVal);
    })

    const ReadMorePar = ({ text }) => {

        const [open, setOpen] = useState(false);

        return (
            <>
                {text.substring(0, 150)}

                <div style={{ display: 'inline-block', textIndent: 0 }}>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            {/* <span style={{ display: 'inline-block' }}> */}
                            {text.substring(150, text.length)}
                            {/* </span> */}
                        </div>
                    </Collapse>
                </div>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                >
                    click
                </Button>
            </>
        )
    }

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

                                <Image
                                    src={item.avatar}
                                    className={`${item.id}--logo`}
                                    fluid
                                />
                                <h5 className='mb-0 text-center'>{item.title}</h5>
                                <h6>{item.desc}</h6>
                                <section className={`my--role--${item.id}--p`}>
                                    {item.myrole.length > 150 ?
                                        <ReadMorePar text={item.myrole} />
                                        :
                                        item.myrole}
                                </section>
                                <Link
                                    to={item.url}
                                    target='_blank'
                                    className={`${item.id}--link`}
                                >
                                    View Project
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
