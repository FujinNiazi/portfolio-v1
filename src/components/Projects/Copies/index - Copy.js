import './index.scss';
import React from "react"
import {useEffect, useState} from 'react'
import Loader from "react-loaders"
import Asan from '../../assets/projects/asan.png'
import Kaist from '../../assets/projects/kaist.png'
import Nust from '../../assets/projects/nust.png'
import Portfolio from '../../assets/projects/Portfolio.pdf'
import AnimatedLetters from "../AnimatedLetters"
import projectsData from '../../data/projects.json'


const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])

   const renderProjects = (projects) => {
    return (
        <div className="images-container">
            {
                projects.map((proj, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            <img 
                            src={proj.cover}
                            className="projects-image"
                            alt="project" />
                            <div className="content">
                                <p className="title">{proj.name}</p>
                                <h4 className="description">{proj.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(proj.url)}
                                >View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}



    return (
        <>
        <div className='container projects-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','r','o','j','e','c','t','s']}
                idx={15}
                />
            </h1>
            <div>
                {renderProjects(projectsData)}
            </div>
            <div className='dbtn'>
                <a href={Portfolio} download>Download CV </a>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Projects;
