import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/' >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about' >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a trarget='_blank' rel='noreferrer' href='www.linkedin.com/in/alexander-coy-089157241' >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a trarget='_blank' rel='noreferrer' href='https://github.com/alexcoy06' >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a trarget='_blank' rel='noreferrer' href='https://calendly.com/alexander-coy/interview' >
                    <FontAwesomeIcon icon={faCalendar} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar