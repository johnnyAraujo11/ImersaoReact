import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/Logo.svg';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return ( 
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="JohnnyFlix logo" /> 
            </Link>
                <Button as={Link} to="/cadastro/video" className="ButtonLink"> Novo Vídeo</Button>
        </nav>      
    )
}

export default Menu; 