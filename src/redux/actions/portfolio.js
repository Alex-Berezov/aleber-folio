export const SET_PORTFOLIO_CATEGORY = 'SET_PORTFOLIO_CATEGORY'
export const SET_PORTFOLIO_ITEMS = 'SET_PORTFOLIO_ITEMS'

export const setPortfolioCategory = (catIndex) => ({
    type: SET_PORTFOLIO_CATEGORY,
    payload: catIndex
})

export const setPortfolioItems = (index) => ({
    type: SET_PORTFOLIO_ITEMS,
    payload: index
})