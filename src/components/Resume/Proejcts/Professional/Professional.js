import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Collapse, Button } from 'react-bootstrap';
import './Professional.css';
import { professionalData } from '../../../../data/professionalData';

export const Professional = () => {

    const [profData, setProfData] = useState(professionalData);

    useEffect(() => {
        setProfData(preVal => preVal)
    })

    const ReadMorePar = ({ text }) => {

        const [open, setOpen] = useState(false);

        const splitSentences = text.split(/[.!?]/);
        const twoSentences = splitSentences.slice(0, 2).join('. ');
        const restOfPar = splitSentences.slice(2, splitSentences.length).join('.');
        return (
            <>
                {/* {text.substring(0, 149) + '...'} */}
                {twoSentences + '.'}

                <span className={open ? 'd-none' : 'd-inline'}>
                    {restOfPar}
                    {/* <span style={{ display: 'inline-block' }}> */}
                    {/* {text.substring(150, text.length)} */}
                    {/* </span> */}
                </span>
                <br />
                <Button
                    onClick={() => setOpen(!open)}
                    className='read--more--btn'
                >
                    Read {open ? 'More' : 'Less'}
                </Button>
            </>
        )
    }

    return (
        // <Row>
        <Col>
            {
                profData.map((item, index) => {
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
        // {/* </Row> */ }
    )
}
