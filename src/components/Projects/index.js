import './index.scss';
import React from "react"
import {useEffect, useState} from 'react'
import Loader from "react-loaders"
import Portfolio from '../../assets/projects/Portfolio.pdf'
import AnimatedLetters from "../AnimatedLetters"
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectList";
import { Link } from 'react-router-dom';


const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])


    return (
        <>
        <div className='projects-page'>
        <div className='container projects-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','r','o','j','e','c','t','s']}
                idx={15}
                />
            </h1>
            <div className='projects-subtitle'>
              A portfolio of some of my more notable projects.
            </div>
            <div className="projectList">
                    {ProjectList.map((project, idx) => {
                    return (
                        <ProjectItem id={idx} name={project.name} image={project.image} />
                        );
                    })}
            </div>
            <div className='dbtn'>
            <a href={Portfolio} className='flat-button' download='Umer_Project_Portfolio'>DOWNLOAD MY PROJECTS PORTFOLIO </a>
                <br />
                <br />
                <br />
                <div className='or'>OR</div>
                <Link to='/cv' className='flat-button2'>CHECTOUT MY CV </Link>
            </div>
            <div className='space4'>
            P
            </div>
        </div>
        <Loader type='pacman' />

        </div>
        </>
    )
}

export default Projects;
