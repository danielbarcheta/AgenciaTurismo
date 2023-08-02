import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchorLock, faBars, faTimes, faWater } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


function Navbar() {
    
    const [iconeAtual, setIconeAtual] = useState(faBars); // inicia com valor Falso para alterar
    
    const alteraClique = () => setIconeAtual(iconeAtual == faBars ? faTimes : faBars)

    const fecharMenuMobile = () => alteraClique;
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">  
                <Link to='/' className='navbar-logo'>
                   TESTE <FontAwesomeIcon icon={faWater} className="icone-logo" />
                </Link>
                    <div className='icone-menu'>
                         <FontAwesomeIcon icon={iconeAtual} onClick={alteraClique} />
                    </div>
                    <ul className={iconeAtual == 'faTimes' ? 'nav-menu-active' : 'nav-menu'}>
                        <li classname='nav-item'>
                            <Link to='/'className='nav-links'onClick={fecharMenuMobile}>
                                Home
                            </Link>
                        </li>    
                        <li classname='nav-item'>
                            <Link to='/servicos'className='nav-links'onClick={fecharMenuMobile}>
                                Serviços
                            </Link>
                            </li>
                            <li classname='nav-item'>
                            <Link to='/produtos'className='nav-links'onClick={fecharMenuMobile}>
                                Produtos
                            </Link>
                            </li>
                            <li classname='nav-item'>
                            <Link to='/cadastro'className='nav-links-mobile'onClick={fecharMenuMobile}>
                                Cadastro
                            </Link>
                            </li>
                    </ul>


            </div>
        </nav>
    </>
  )
}

export default Navbar