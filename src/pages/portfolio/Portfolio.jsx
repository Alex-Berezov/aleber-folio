import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PortfolioPopup from '../../components/portfolioPopup/PortfolioPopup'

// import {setPortfolioCategory} from '../../redux/actions/portfolio'

import './portfolio.css'

function Portfolio(props) {
    // const dispatch = useDispatch();
    const [visiblePopup, setVisiblePopup] = useState(null)
    const [isActive, setIsActive] = useState(0)
    const {portfilioNavItems, portfilioWorkItems} = useSelector(state => state.portfolioReducer)

    const handleSelectedPortfolioItem = () => {

    }

    const openVisiblePopup = (e) => {
        setVisiblePopup(e.target.dataset.index)
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
                            {portfilioNavItems &&
                            portfilioNavItems.map((name, index) => {
                                return <li
                                    className={`tab_${index} ${index === isActive ? 'selected' : ''}`}
                                    key={`${name}_${index}`}
                                >
                                    {name}
                                </li>
                            })
                            }
                        </ul>
                    </div>
                    <div className="tabs_content">
                        {portfilioWorkItems &&
                        portfilioWorkItems.map((work, index) => {
                            return <div className="portfolio__item" key={work.id + '_' + index}>
                                <img
                                    onClick={openVisiblePopup}
                                    data-index={index}
                                    src={work.img}
                                    alt="img-1"
                                />

                                {portfilioWorkItems[visiblePopup] &&
                                <PortfolioPopup
                                    {...portfilioWorkItems[visiblePopup]}
                                    closeVisiblePopup={closeVisiblePopup}
                                />
                                }
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;