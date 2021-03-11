import React, { useState } from 'react'

import { Header } from './styles'

import logomarca from '../../image/logomarca.png';
import {Link} from 'react-router-dom'
const Menu: React.FC = () => {

    const [active, setActive] =useState(false)

    function ativarMenu(){
        if(active===false){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    return (
        <Header>
            <div className="container">
                <img
                    src={logomarca}
                    alt="CRT Sistemas"
                />
                <div className={active ? "menu-section on":"menu-section"} onClick={ativarMenu}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Suporte</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Financeiro</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Comercial</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Minha Conta</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Header>
    )
}

export default Menu