import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap';
import { FiExternalLink } from 'react-icons/fi';
// import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import './Project.css';

export const Project = ({ data }) => {

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
        <Col className='project--parent--col'>
            {
                projectData.map((item, index) => {
                    return (
                        <Row key={index}>

                            <Col
                                className={`${item.id}--col project--col`}
                            >
                                <div className='d-flex justify-content-evenly d-md-grid'>
                                    <Col xs={3} sm={4} md={6} className={`${item.id}--logo--col d-flex justify-content-center
                                    align-items-start`}>
                                        <Image
                                            src={item.avatar}
                                            className={`${item.id}--logo mb-sm-3`}
                                            fluid
                                        />
                                    </Col>
                                    <Col>
                                        <section>
                                            <h5 className='mb-1 text-start text-md-center fw-bolder'>{item.title}</h5>
                                            <h6>{item.desc}</h6>
                                            <h6>Project type: <strong>{item.type}</strong></h6>
                                            <div className='d-flex justify-content-start justify-content-md-evenly align-items-center mx-auto'>
                                                <Link
                                                    to={item.url}
                                                    target='_blank'
                                                    className={`${item.id}--link    text-decoration-underline`}
                                                >
                                                    {/* View Project */}
                                                    <FiExternalLink size={22} />
                                                </Link>
                                                <Link
                                                    to={item.github}
                                                    target='_blank'
                                                    className={item.category === 'professional' ? 'd-none' : `${item.id}--link ms-3 ms-md-0`}
                                                >
                                                    {/* View GitHub */}
                                                    <AiOutlineGithub size={25} />
                                                </Link>
                                            </div>
                                        </section>
                                    </Col>
                                </div>
                                {/* <section className={`my--role--${item.id}--p`}>
                                    {item.myrole.length > 150 ?
                                        <ReadMorePar text={item.myrole} />
                                        :
                                        item.myrole}
                                </section> */}
                                {/* <section className='mt-1 project--links--section'>
                                    <article className='d-flex justify-content-evenly w-100'>
                                        <Link
                                            to={item.url}
                                            target='_blank'
                                            className={`${item.id}--link d-flex align-items-center text-decoration-underline`}
                                        >
                                            
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
                                </section> */}
                            </Col>

                        </Row>
                    )
                })
            }
        </Col>
        // {/* </Row> */ }
    )
}
