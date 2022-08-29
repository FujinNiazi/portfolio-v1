import {Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-u.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faBuilding, faEnvelope, faFile, faFileAlt, faHome, faScrewdriverWrench, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sublogo" src={LogoSubtitle} alt="umer" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faBuilding} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="cv-link" to="/cv">
                <FontAwesomeIcon icon={faFileAlt} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                   rel='noreferrer'
                   href="https://www.linkedin.com/in/umerniazi/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" 
                   rel='noreferrer'
                   href="https://github.com/FujinNiazi"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" 
                   rel='noreferrer'
                   href="https://www.instagram.com/fujinniazi/?hl=ko"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar
