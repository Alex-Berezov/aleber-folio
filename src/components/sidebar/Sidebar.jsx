import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import './sidebar.css'
import iAm from '../../assets/img/iam.png'

function Sidebar() {
    const [visibleSidebar, setVisibleSideBar] = useState(false)

    const toggleVisibleSidebar = () => {
        setVisibleSideBar(!visibleSidebar)
    }

    return (
        <>
            <div onClick={toggleVisibleSidebar} className="sidebar__burger">
                <span />
                <span />
                <span />
            </div>
            <div className={visibleSidebar && visibleSidebar ? 'sidebar visible_sidebar' : 'sidebar'}>
                <div onClick={toggleVisibleSidebar} className="sidebar_close">X</div>
                <div className="sidebar__photo">
                    <img src={iAm} alt="Alex Berezov foto" />
                </div>
                <div className="sidebar__navMenu">
                    <ul>
                        <li>
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                onClick={toggleVisibleSidebar}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeClassName="active"
                                onClick={toggleVisibleSidebar}
                            >
                                Обо мне
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resume"
                                activeClassName="active"
                                onClick={toggleVisibleSidebar}
                            >
                                Резюме
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                activeClassName="active"
                                onClick={toggleVisibleSidebar}
                            >
                                Портфолио
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                activeClassName="active"
                                onClick={toggleVisibleSidebar}
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__copyright">
                    <p>© 2021 <b>Алексей Березов</b></p>
                </div>
            </div>
        </>
    );
}

export default Sidebar;