import React from 'react'
import './PortfolioPopup.css'

const PortfolioPopup = ({workName, stack, libraries, prodLink, githubLink, closeVisiblePopup}) => {

    return <div className="projectDescPopup">
        <div className="header">
            <h3>Информация о проекте <span>{workName}</span></h3>
            <span onClick={closeVisiblePopup}>X</span>
        </div>
        <div className="body">
            <div className="body__items stack">
                <h4>Стэк:</h4>
                <p>{stack}</p>
            </div>
            <div className="body__items libraries">
                <h4>Библиотеки:</h4>
                <p>{libraries}</p>
            </div>
            <div className="body__items prodLink">
                <h4>Ссылка на продакшен:</h4>
                <a href="{prodLink}">{prodLink}</a>
            </div>
            <div className="body__items githubLink">
                <h4>Ссылка на гитхаб:</h4>
                <a href="{githubLink}">{githubLink}</a>
            </div>
        </div>
    </div>
}

export default PortfolioPopup