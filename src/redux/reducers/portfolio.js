import { SET_PORTFOLIO_CATEGORY, SET_PORTFOLIO_ITEMS } from '../actions/portfolio'

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

let initialState = {
    category: null,
    portfilioNavItems: [ 'React', 'JavaScript', 'WordPress' ],
    portfilioWorkItems: [
        {id: 0,
            img: img1,
            category: 0,
            workName: 'My portfolio',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 1,
            img: img2,
            category: 0,
            workName: 'Work 2',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 2,
            img: img3,
            category: 0,
            workName: 'Work 3',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 3,
            img: img4,
            category: 0,
            workName: 'Work 3',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 4,
            img: img5,
            category: 0,
            workName: 'Work 4',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 5,
            img: img6,
            category: 0,
            workName: 'Work 5',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 6,
            img: img7,
            category: 1,
            workName: 'Work 7',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 7,
            img: img8,
            category: 1,
            workName: 'Work 8',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 8,
            img: img9,
            category: 1,
            workName: 'Work 9',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 9,
            img: img10,
            category: 1,
            workName: 'Work 10',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 10,
            img: img11,
            category: 1,
            workName: 'Work 11',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 11,
            img: img12,
            category: 1,
            workName: 'Work 12',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 12,
            img: img13,
            category: 1,
            workName: 'Work 13',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 13,
            img: img14,
            category: 1,
            workName: 'Work 14',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 14,
            img: img15,
            category: 2,
            workName: 'Work 15',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 15,
            img: img16,
            category: 2,
            workName: 'Work 16',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 16,
            img: img17,
            category: 2,
            workName: 'Work 17',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 17,
            img: img18,
            category: 2,
            workName: 'Work 18',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 18,
            img: img19,
            category: 2,
            workName: 'Work 19',
            stack: 'React, Node, Express, MongoDB',
            libraries: 'Redux, React-router-dom, Saga',
            prodLink: 'https://github.com/Alex-Berezov',
            githubLink: 'https://github.com/Alex-Berezov/aleber-folio'
        },
        {id: 19,
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