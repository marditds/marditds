import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap';
import './Personal.css';
import { personalData } from '../../../../data/personalData';
import { FiExternalLink } from 'react-icons/fi';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';

export const Personal = () => {

    const [prsonData, setPersonData] = useState(personalData);

    useEffect(() => {
        setPersonData(preVal => preVal)
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
        <Col className='prject--parent--col'>
            {
                prsonData.map((item, index) => {
                    return (
                        <Row key={index}>

                            <Col
                                className={`${item.id}--col`}
                            >

                                <Image
                                    src={item.avatar}
                                    className={`${item.id}--logo mb-2`}
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
                                    className={`${item.id}--link d-flex text-decoration-underline`}
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
