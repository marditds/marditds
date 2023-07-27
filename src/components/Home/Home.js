import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { Container, Button } from 'react-bootstrap';
// import { Titles } from '../Intro/Titles/Titles';
// import { LuChevronDown, LuChevronsDown } from 'react-icons/lu';
// import { PiEnvelopeThin, PiEnvelopeOpenThin } from 'react-icons/pi';
import { RxEnvelopeClosed, RxEnvelopeOpen } from 'react-icons/rx';
import { Intro } from '../Intro/Intro';
import { Resume } from '../Resume/Resume';
import { Contacts } from '../Contacts/Contacts';
import './Home.css';

export const Home = () => {

    return (
        <>
            <Intro />
            <Resume />
            <Contacts />
        </>
    )
}
