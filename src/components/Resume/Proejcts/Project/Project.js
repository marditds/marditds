import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';
import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

export const Project = ({ data }) => {

    const { pathname } = useLocation();
    const [projectData, setProjectData] = useState(data);

    useEffect(() => {
        setProjectData(preVal => preVal)
    })

    // const ReadMorePar = ({ text }) => {

    //     const [open, setOpen] = useState(true);

    //     const splitSentences = text.split(/[.!?]/);
    //     const twoSentences = splitSentences.slice(0, 2).join('. ');
    //     const restOfPar = splitSentences.slice(2, splitSentences.length).join('.');
    //     return (
    //         <>
    //             {twoSentences}{open ? '...' : '.'}

    //             <span className={open ? 'd-none' : 'd-inline'}>
    //                 {restOfPar}
    //             </span>
    //             <br />
    //             <Button
    //                 onClick={() => setOpen(!open)}
    //                 className={`read--more--btn ${open ? '' : 'clicked'}`}
    //             >
    //                 Read {open ? 'More' : 'Less'}
    //                 {open ? <BsCaretDown className='ms-1' size={20} /> : <BsCaretUp className='ms-1' size={20} />}
    //                 {/* {open ? <BsFillCaretDownFill /> : <BsFillCaretUpFill />} */}
    //             </Button>
    //         </>
    //     )
    // }

    return (
        // <Row>
        <Col className='prject--parent--col'>
            {
                projectData.map((item, index) => {
                    return (
                        <Row key={index}>

                            <Col
                                className={`${item.id}--col`}
                            >

                                <Image
                                    src={item.avatar}
                                    className={`${item.id}--logo mb-3`}
                                    fluid
                                />

                                <section>
                                    <h5 className='mb-1 text-center fw-bolder'>{item.title}</h5>
                                    <h6>{item.desc}</h6>
                                    <h6>Project type: <strong>{item.type}</strong></h6>
                                </section>
                                {/* <section className={`my--role--${item.id}--p`}>
                                    {item.myrole.length > 150 ?
                                        <ReadMorePar text={item.myrole} />
                                        :
                                        item.myrole}
                                </section> */}
                                <section className='w-100 mt-1'>
                                    <article className='d-flex justify-content-evenly w-100'>
                                        <Link
                                            to={item.url}
                                            target='_blank'
                                            className={`${item.id}--link d-flex align-items-center text-decoration-underline`}
                                        >
                                            {/* View Project */}
                                            <FiExternalLink size={22} className='ms-1' />
                                        </Link>
                                        <Link
                                            to={item.github}
                                            target='_blank'
                                            className={item.category === 'professional' ? 'd-none' : `${item.id}--link`}
                                        >
                                            <AiOutlineGithub size={25} />
                                        </Link>
                                    </article>
                                </section>
                            </Col>

                        </Row>
                    )
                })
            }
        </Col>
        // {/* </Row> */ }
    )
}
