import React from "react";
import {useEffect, useState} from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./index.scss"
import Loader from "react-loaders"
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters"
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

const Experience = () => {
 

    
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
   }, [])


    return (
        <>
        <div className='container experience-page'>
          
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['E','x','p','e','r','i','e','n','c','e']}
                idx={15}
                />
            </h1>
            <div className="exp-subtitle">
              A timeline of my previous work and education experiences.
            </div>
            <div className="experience">
            <VerticalTimeline lineColor="rgb(255, 215, 0)">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '	hsl(57, 100%, 48%)', color: '#333', }}
    contentArrowStyle={{ borderRight: '10px solid  hsl(57, 100%, 48%)' }}
    dateClassName = "date"
    date=" January 2022 - present"
    icon={<WorkIcon />}
    iconClassName = "vertical-timeline-element-icon "
  >
    <h3 className="vertical-timeline-element-title">Researcher (영구원)</h3>
    <h4 className="vertical-timeline-element-subtitle">HEART Lab (의공학연구소 서울아산병원), 대한민국</h4>
    <p >
    <a>Keywords:</a> <c>Continuum Robot,</c> <c>Bi-Stability,</c> <c>Compliant Mechanisms,</c> <c>Fusion 360,</c> <c>3D Printing</c>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2019 - August 2021"
    dateClassName = "date"
    iconClassName = "vertical-timeline-element-icon "
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Graduate Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle">Neuro-Rehabilitation Lab (한국과학기술원), 대한민국</h4>
    <p>
    <a>Keywords:</a> <c>Adapted Origami,</c> <c>Surrogate Folds,</c> <c>Rehabilitation,</c> <c>Solidworks,</c> <c>3D Printing</c>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2019 - August 2021"
    dateClassName = "date"
    iconClassName = "vertical-timeline-element-icon "
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Masters of Sciences in Robotics Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Korea Advanced Institute of Science and Technology (KAIST), South Korea</h4>
    <p>
    <a>Courses:</a> <c>Rehabilitation Enginneering,</c> <c>Soft Robotics: Biomimetic Systems,,</c> <c>Deep learning,</c> <c>Probability and Statistics,</c> <c>Mobile Robotics</c>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="March 2019 - June 2019"
    dateClassName = "date"
    iconClassName = "vertical-timeline-element-icon "
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Design Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">VisionX Lab (CIE NUST), Pakistan</h4>
    <p>
    <a>Keywords:</a> <c>Enclosure Design,</c> <c>Shopping Cart Design,</c> <c>Solidworks,</c> <c>Manufacturing</c>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="August 2017 - Feburar 2019"
    dateClassName = "date"
    icon={<WorkIcon />}
    iconClassName = "vertical-timeline-element-icon "
  >
    <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle">RISE Lab (NUST), Pakistan</h4>
    <p>
    <a>Keywords:</a> <c>Hybrid Actuator Design,</c> <c>Rehabilitation,</c> <c>ABAQUS,</c> <c>Solidworks,</c> <c>3D printing</c>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2014 - August 2018"
    dateClassName = "date"
    iconClassName = "vertical-timeline-element-icon "
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Mechanical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">National University of Sciences and Technology (NUST), Pakistan</h4>
    <p>
    <a>Courses:</a> <c>Robotics and Automation,</c> <c>Theory of Machines,</c> <c>Mechanics of Materials,</c> <c>Statics and Dynamics,</c> <c>Programming,</c> <c>Mechatronic Design</c>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconClassName = "vertical-timeline-element-icon "
    icon={<StarIcon />}
  />
</VerticalTimeline>
        </div>
        <div>
        <h2 className="space">
            </h2>
        </div>
        <div className="scroller"><Link to="/projects" className='flat-exp'>CHECKOUT MY PROJECTS</Link></div>
        <div>
        <h2 className="space3">
            </h2>
        </div>
        
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Experience;
