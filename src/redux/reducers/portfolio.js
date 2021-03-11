import { SET_PORTFOLIO_CATEGORY, SET_PORTFOLIO_ITEMS } from '../actions/portfolio'

import aleber from '../../assets/img/aleber.jpg'
import link_shortener from '../../assets/img/link_shortener.jpg'
import react_pizza from '../../assets/img/react_pizza.jpg'
import social_network from '../../assets/img/social_network.jpg'
import todo_list from '../../assets/img/todo_list.jpg'
import simple_chat from '../../assets/img/simple_chat.jpg'
import farizda_cv from '../../assets/img/farizda_cv.jpg'
import yeti_calc from '../../assets/img/yeti_calc.jpg'
import tabs_gallery from '../../assets/img/tabs_gallery.jpg'
import screen_keyboard from '../../assets/img/screen_keyboard.jpg'
import mega_calc from '../../assets/img/mega_calc.jpg'
import yeti_spb from '../../assets/img/yeti_spb.jpg'
import aquasklad from '../../assets/img/aquasklad.jpg'
import vodazona from '../../assets/img/vodazona.jpg'
import humoraf from '../../assets/img/humoraf.jpg'
import gurmanfresh from '../../assets/img/gurmanfresh.jpg'
import aquatrol from '../../assets/img/aquatrol.jpg'

let initialState = {
    category: null,
    portfolioNavItems: [ 'React', 'JavaScript', 'WordPress' ],
    portfolioWorkItems: [
        {id: 0,
            img: aleber,
            category: 0,
            workName: 'AleBer portfolio',
            stack: 'React, Redux',
            libraries: 'Redux, React-redux, React-router-dom, Formik',
            prodLink: 'https://aleber.ru',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 1,
            img: link_shortener,
            category: 0,
            workName: 'Link Shortener',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Express, Jsonwebtoken, Nodemon, Mongoose',
            prodLink: 'https://aleber-mern-link-shortener.herokuapp.com/',
            githubLink: 'https://github.com/Alex-Berezov/MERN-Link-Shortener'
        },
        {id: 2,
            img: react_pizza,
            category: 0,
            workName: 'React Pizza',
            stack: 'React, Redux',
            libraries: 'React, Redux, react-router-dom, axios, redux-thunk, json-serve',
            prodLink: 'https://react-pizza-aleber.herokuapp.com/',
            githubLink: 'https://github.com/Alex-Berezov/pizza_react'
        },
        {id: 3,
            img: social_network,
            category: 0,
            workName: 'Social Network',
            stack: 'React, Redux',
            libraries: 'Redux, react-router-dom, redux-thunk, axios, reselect',
            prodLink: 'https://samuray-social-network.vercel.app/',
            githubLink: 'https://github.com/Alex-Berezov/samuray-social-network'
        },
        {id: 4,
            img: todo_list,
            category: 0,
            workName: 'ToDo List',
            stack: 'React, json-server',
            libraries: 'React, axios, json-server, react-router-dom',
            prodLink: 'https://aleber-react-simple-todo.herokuapp.com/',
            githubLink: 'https://github.com/Alex-Berezov/react-simple-todo'
        },
        {id: 5,
            img: simple_chat,
            category: 0,
            workName: 'Simple chat',
            stack: 'React, Redux, Node, Express',
            libraries: 'Redux, axios, express, nodemon, socket.io',
            prodLink: 'https://aleber-simple-chat.herokuapp.com/',
            githubLink: 'https://github.com/Alex-Berezov/simple-chat'
        },
        {id: 20,
            img: farizda_cv,
            category: 1,
            workName: 'Резюме дизайнера',
            stack: 'JS, HTML, CSS',
            libraries: '',
            prodLink: 'https://farizda-cv.vercel.app/',
            githubLink: 'https://github.com/Alex-Berezov/Farizda-CV'
        },
        {id: 21,
            img: yeti_calc,
            category: 1,
            workName: 'Калькулятор расчёта фасадов для сайта yeti-spb.ru',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://yeti-spb.ru/izgotovlenie-fasadov/',
            githubLink: 'https://github.com/Alex-Berezov/yeti-spb_FacadesCalc'
        },
        {id: 22,
            img: mega_calc,
            category: 1,
            workName: 'Мега калькулятор на всю страницу',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://yeti-spb.ru/kalkulyator-lestnicy-pod-kljuch/',
            githubLink: 'https://github.com/Alex-Berezov/yeti-spb_MegaCalc'
        },
        {id: 23,
            img: tabs_gallery,
            category: 1,
            workName: 'Простая галлерея с табами',
            stack: 'JS, HTML, CSS',
            libraries: '',
            prodLink: 'http://localhost:3001/portfolio',
            githubLink: 'https://github.com/Alex-Berezov/Tabs'
        },
        {id: 24,
            img: screen_keyboard,
            category: 1,
            workName: 'Screen keyboard',
            stack: 'JS, HTML, CSS',
            libraries: '',
            prodLink: 'https://screen-keyboard.vercel.app/',
            githubLink: 'https://github.com/Alex-Berezov/screen_keyboard'
        },
        {id: 41,
            img: aquatrol,
            category: 2,
            workName: 'Акватрол',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://xn--80aaf5ahrnp.xn--p1ai/',
            githubLink: ''
        },
        {id: 42,
            img: yeti_spb,
            category: 2,
            workName: 'Сайт компании Yeti спб',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://yeti-spb.ru/',
            githubLink: ''
        },
        {id: 43,
            img: aquasklad,
            category: 2,
            workName: 'Aquasklad',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://aquasklad.ru/',
            githubLink: ''
        },
        {id: 44,
            img: humoraf,
            category: 2,
            workName: 'HumorAF.ru',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://humoraf.ru/',
            githubLink: ''
        },
        {id: 45,
            img: vodazona,
            category: 2,
            workName: 'Vodazona',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://vodazona.ru/',
            githubLink: ''
        },
        {id: 46,
            img: gurmanfresh,
            category: 2,
            workName: 'Gurmanfresh',
            stack: 'JS, HTML, CSS, WordPress',
            libraries: '',
            prodLink: 'https://gurmanfresh.vercel.app/',
            githubLink: ''
        }
    ]
}

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PORTFOLIO_CATEGORY: {
            return {
                ...state,
                category: action.payload
            }
        }
        case SET_PORTFOLIO_ITEMS: {
            return {
                ...state,
                category: action.payload
            }
        }
        default:
            return state
    }
}

export default portfolioReducer