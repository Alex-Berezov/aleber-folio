import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PortfolioNavCat from '../../components/portfolioNavCat/PortfolioNavCat'
import {setPortfolioCategory} from '../../redux/actions/portfolio'
import PortfilioWorkItems from '../../components/portfilioWorkItems/PortfilioWorkItems'
import './portfolio.css'

function Portfolio(props) {
    const dispatch = useDispatch();
    const [visiblePopup, setVisiblePopup] = useState(null)
    const {portfolioNavItems, portfolioWorkItems, category} = useSelector(state => state.portfolioReducer)

    const onSelectCategory = useCallback(index => {
        dispatch(setPortfolioCategory(index))
    }, [])

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
                    <PortfolioNavCat
                        activeCategory={category}
                        onClickCategory={onSelectCategory}
                        items={portfolioNavItems}
                    />
                    <PortfilioWorkItems
                        portfolioWorkItems={portfolioWorkItems}
                        category={category}
                        openVisiblePopup={openVisiblePopup}
                        closeVisiblePopup={closeVisiblePopup}
                        visiblePopup={visiblePopup}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;