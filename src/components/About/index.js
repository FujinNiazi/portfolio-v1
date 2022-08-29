import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import Loader from 'react-loaders'
import ParticlesBackground from './ParticlesBackground'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import fusion360 from '../../assets/images/fusion360.png';
import solidworks from '../../assets/images/solidworks.png'; 
import printing from '../../assets/images/3dprinting.png';
import {faAngular, faCss3, faGitAlt, faHtml5, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
         setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
    <>
        <div>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t','','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am a Designer and Researcher with an appreciable knowledge about <a><i>Mechanical Design</i></a>, <a><i>Rehabilitation Engineering</i></a>, and <a><i>Robotics</i></a>. I have previously worked as a graduate and undergraduate researcher and undertook a number of internships to broaden my practical experience. I am currently working as a researcher at the HEART Lab in the Biomedical Engineering Research Center at ASAN Hospital in Seoul. 
                </p>
                <p>
                Currently I am interested in Origami and Compliant Mechanisms, about how they could be used to facilitate or build better designs. I like building and making things so I have become proficient at 3D Modeling and Prototyping. Specifically focusing on CAD software such as <c className ='skill'>Fusion 360</c>, <c className ='skill'>Solidworks</c> and processes such as <c className ='skill'>3D Printing</c>.                 
                </p>
                <p>
                Other than that, I'm always willing to branch out and learn new things! Through different projects I have dipped my toes into <c className ='skill'>Python (Pytorch)</c>, <c className ='skill'>MATLAB</c>, <c className ='skill'>React</c> and <c className ='skill'>CSS</c>.                
                </p>
                <p>
                I also love working with and learning from new and different people, as everyone has different experiences under their belt and a new perspective to offer. In the future by broadening my experience from knowledge in other fields, I hope to become a more well-rounded designer.
                </p>
                <Link to="/experience" className='flat-button'>SCROLL THROUGH MY EXPERIENCES</Link>
            </div>
            

            <div className='stage-cube-cont'>
                
                <div className='cubespinner'>
                    <div className='face1'>
                        <img className='printing' src={printing}/>
                    </div>
                    <div className='face2'>
                        <img className='solidworks' src={solidworks}/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face5'>
                        <img className='fusion' src={fusion360}/> 
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                    </div>
                </div>
            </div>
        </div>
        <div  className='background'>
                <ParticlesBackground/>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About