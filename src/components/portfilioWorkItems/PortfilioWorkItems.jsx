import React from 'react'
import PortfolioPopup from '../../components/portfolioPopup/PortfolioPopup'
import './portfilioWorkItems.css'

const PortfilioWorkItems = ({portfolioWorkItems, category, openVisiblePopup, closeVisiblePopup, visiblePopup}) => {
    return <div className="tabs_content">
        {portfolioWorkItems &&
        portfolioWorkItems.map((work, index) => {
                let workCategory = work.category

                if (workCategory === category) {
                    return <div className="portfolio__item" key={work.id + '_' + index}>
                        <img
                            onClick={openVisiblePopup}
                            data-index={index}
                            src={work.img}
                            alt="img-1"
                        />

                        {portfolioWorkItems[visiblePopup] &&
                        <PortfolioPopup
                            {...portfolioWorkItems[visiblePopup]}
                            closeVisiblePopup={closeVisiblePopup}
                        />
                        }
                    </div>
                }
                if (category === null) {
                    return <div className="portfolio__item" key={work.id + '_' + index}>
                        <img
                            onClick={openVisiblePopup}
                            data-index={index}
                            src={work.img}
                            alt="img-1"
                        />

                        {portfolioWorkItems[visiblePopup] &&
                        <PortfolioPopup
                            {...portfolioWorkItems[visiblePopup]}
                            closeVisiblePopup={closeVisiblePopup}
                        />
                        }
                    </div>
                }
            }
        )
        }
    </div>
}

export default PortfilioWorkItems