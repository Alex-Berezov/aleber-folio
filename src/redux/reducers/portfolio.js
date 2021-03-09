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
            img: tabs_gallery,
            category: 1,
            workName: 'Простая галлерея с табами',
            stack: 'JS, HTML, CSS',
            libraries: '',
            prodLink: 'http://localhost:3001/portfolio',
            githubLink: 'https://github.com/Alex-Berezov/Tabs'
        },
        {id: 23,
            img: img10,
            category: 1,
            workName: 'Work 10',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 24,
            img: img11,
            category: 1,
            workName: 'Work 11',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 25,
            img: img12,
            category: 1,
            workName: 'Work 12',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 26,
            img: img13,
            category: 1,
            workName: 'Work 13',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 27,
            img: img14,
            category: 1,
            workName: 'Work 14',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 41,
            img: img15,
            category: 2,
            workName: 'Work 15',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 42,
            img: img16,
            category: 2,
            workName: 'Work 16',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 43,
            img: img17,
            category: 2,
            workName: 'Work 17',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 44,
            img: img18,
            category: 2,
            workName: 'Work 18',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 45,
            img: img19,
            category: 2,
            workName: 'Work 19',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 46,
            img: img20,
            category: 2,
            workName: 'Work 20',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
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