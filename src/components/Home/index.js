import './index.scss';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-u.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['m','e','r',',']
    const jobArray = [
    'a',
     '',
     '',
    'D',
    'e',
    's',
    'i',
    'g',
    'n',
    'e',
    'r',
    '.'
    ]

    useEffect(() => {
         setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3500)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br /> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx= {15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx= {22} />
                </h1>
                <h2>Researcher / Robotics Graduate / Mechanical Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <br />
                <br />
                <br />
                <h3>OR</h3>
                <Link to="/about" className='flat-button2'>LEARN MORE ABOUT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home