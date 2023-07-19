import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Collapse, Button } from 'react-bootstrap';
import './Professional.css';
import { professionalData } from '../../../../data/professionalData';
import { FiExternalLink } from 'react-icons/fi';
import { BsCaretDown, BsCaretUp, BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { PiCaretCircleDoubleDownLight } from 'react-icons/pi';

export const Professional = () => {

    const [profData, setProfData] = useState(professionalData);

    useEffect(() => {
        setProfData(preVal => preVal)
    })

    const ReadMorePar = ({ text }) => {

        const [open, setOpen] = useState(true);

        const splitSentences = text.split(/[.!?]/);
        const twoSentences = splitSentences.slice(0, 2).join('. ');
        const restOfPar = splitSentences.slice(2, splitSentences.length).join('.');
        return (
            <>
                {twoSentences}{open ? '...' : '.'}

                <span className={open ? 'd-none' : 'd-inline'}>
                    {restOfPar}
                </span>
                <br />
                <Button
                    onClick={() => setOpen(!open)}
                    className={`read--more--btn ${open ? '' : 'clicked'}`}
                >
                    Read {open ? 'More' : 'Less'}
                    {open ? <BsCaretDown className='ms-1' size={20} /> : <BsCaretUp className='ms-1' size={20} />}
                    {/* {open ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />} */}
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
                                <h5 className='mb-1 text-center fw-bolder'>{item.title}</h5>
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
                                    className={`${item.id}--link d-flex text-decoration-underline mt-3`}
                                >
                                    View Project<FiExternalLink className='ms-1' />
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
