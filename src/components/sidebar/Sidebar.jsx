import React from 'react';
import {NavLink} from "react-router-dom";

import './sidebar.css'
import iAm from '../../assets/img/iam.png'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__photo">
                <img src={iAm} alt="Alex Berezov foto" />
            </div>
            <div className="sidebar__navMenu">
                <ul>
                    <li className="active">
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Обо мне</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Резюме</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Портфолио</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Контакты</NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar__copyright">
                <p>© 2021 <b>Алексей Березов</b></p>
            </div>
        </div>
    );
}

export default Sidebar;