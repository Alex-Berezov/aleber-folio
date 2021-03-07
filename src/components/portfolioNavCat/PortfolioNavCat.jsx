import React from 'react'
import './PortfolioNavCat.css'

const PortfolioNavCat = ({items, activeCategory, onClickCategory}) => {

    return (
        <div className="tabs_btns">
            <ul>
                <li
                    className={activeCategory === null ? 'selected' : ''}
                    onClick={() => onClickCategory(null)}
                >Все работы
                </li>

                {items &&
                items.map((name, index) => {
                    return <li
                        className={`${activeCategory === index ? 'selected' : ''}`}
                        onClick={() => onClickCategory(index)}
                        key={`${name}_${index}`}
                    >
                        {name}
                    </li>
                })
                }
            </ul>
        </div>
    )
}

export default PortfolioNavCat