import React from 'react';

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
                    <li className="active">Главная</li>
                    <li>Обо мне</li>
                    <li>Резюме</li>
                    <li>Портфолио</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="sidebar__copyright">
                <p>© 2021 <b>Алексей Березов</b></p>
            </div>
        </div>
    );
}

export default Sidebar;