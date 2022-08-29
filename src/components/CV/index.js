import './index.scss';
import React from "react"
import {useEffect, useState} from 'react'
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import resume from '../../assets/cv/Resume.png'
import Dload from '../../assets/cv/Resume.pdf'
import { Link } from 'react-router-dom';

const CV = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 4000)
   }, [])

    return (
        <>
        <div className='container cv-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C','u','r','r','i','c','u','l','u','m','','V','i','t','a','e']}
                idx={15}
                />
            </h1>
            <a href={Dload} className='flat-button4' download='Umer_CV'>DOWNLOAD MY CV </a>
            <div className="resume">
            <img src={resume} />
            <p>
            <b></b>
            </p>
            {/* <GitHubIcon /> */}
            <Link to='/contact' className='flat-button5'>CONTACT ME HERE FOR MORE INFORMATION</Link>
    </div>
    <div className='space'>
    P
    </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default CV;