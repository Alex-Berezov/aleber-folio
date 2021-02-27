import React, {useState} from 'react';

import './portfolio.css'
import img1 from '../../assets/img/examples/img-1.jpg'
import img2 from '../../assets/img/examples/img-2.jpg'
import img3 from '../../assets/img/examples/img-3.jpg'
import img4 from '../../assets/img/examples/img-4.jpg'
import img5 from '../../assets/img/examples/img-5.jpg'
import img6 from '../../assets/img/examples/img-6.jpg'
import img7 from '../../assets/img/examples/img-7.jpg'
import img8 from '../../assets/img/examples/img-8.jpg'
import img9 from '../../assets/img/examples/img-9.jpg'
import img10 from '../../assets/img/examples/img-10.jpg'
import img11 from '../../assets/img/examples/img-11.jpg'
import img12 from '../../assets/img/examples/img-12.jpg'
import img13 from '../../assets/img/examples/img-13.jpg'
import img14 from '../../assets/img/examples/img-14.jpg'
import img15 from '../../assets/img/examples/img-15.jpg'
import img16 from '../../assets/img/examples/img-16.jpg'
import img17 from '../../assets/img/examples/img-17.jpg'
import img18 from '../../assets/img/examples/img-18.jpg'
import img19 from '../../assets/img/examples/img-19.jpg'
import img20 from '../../assets/img/examples/img-20.jpg'

function Portfolio() {
    const [visiblePopup, setVisiblePopup] = useState(false)


    const openVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }
    const closeVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    return (
        <div className="portfolio">
            <div className="portfolio__title block__title">
                <h2>Портфолио</h2>
                <span/>
            </div>
            <div className="portfolio__examples">
                <div className="wrapper">
                    <div className="tabs_btns">
                        <ul>
                            <li className="all selected">All items</li>
                            <li className="tab_1">Item 1</li>
                            <li className="tab_2">Item 2</li>
                            <li className="tab_3">Item 3</li>
                        </ul>
                    </div>
                    <div className="tabs_content">
                        <div className="content visible" id="tab_1">
                            <div className="portfolio__item">
                                <img src={img1} alt="img-1" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span onClick={openVisiblePopup} className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img2} alt="img-2" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img3} alt="img-3" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img4} alt="img-4" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img5} alt="img-5" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img6} alt="img-6" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                        </div>
                        <div className="content visible" id="tab_2">
                            <div className="portfolio__item">
                                <img src={img7} alt="img-7" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img8} alt="img-8" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img9} alt="img-9" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img10} alt="img-10" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img11} alt="img-11" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img12} alt="img-12" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img13} alt="img-13" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img14} alt="img-14" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                        </div>
                        <div className="content visible" id="tab_3">
                            <div className="portfolio__item">
                                <img src={img15} alt="img-15" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img16} alt="img-16" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img17} alt="img-17" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img18} alt="img-18" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img19} alt="img-19" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                            <div className="portfolio__item">
                                <img src={img20} alt="img-20" />
                                <div className="portfolio__item_overlay">
                                    <span className="text">Работа такая-то растакая-то</span>
                                    <span className="open_work">Смотреть проект</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {visiblePopup && (
                <div className="projectDescPopup">
                    <div className="header">
                        <h3>Информация о проекте Портфолио</h3>
                        <span onClick={closeVisiblePopup}>X</span>
                    </div>
                    <div className="body">
                        <div className="body__items stack">
                            <h4>Стэк:</h4>
                            <p>React, Node, Express, MongoDB</p>
                        </div>
                        <div className="body__items libraries">
                            <h4>Библиотеки:</h4>
                            <p>Redux, React-router-dom, Saga</p>
                        </div>
                        <div className="body__items prodLink">
                            <h4>Ссылка на продакшен:</h4>
                            <a href="https://github.com/Alex-Berezov">https://github.com/Alex-Berezov</a>
                        </div>
                        <div className="body__items githubLink">
                            <h4>Ссылка на гитхаб:</h4>
                            <a href="https://github.com/Alex-Berezov/aleber-folio">https://github.com/Alex-Berezov/aleber-folio</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
);
}

export default Portfolio;