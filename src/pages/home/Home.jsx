import React from 'react';

import './home.css'

function Home() {
    return (
        <div className="homePage">
            <p className="homePage__title">Привет, меня зовут <span>Алексей Березов</span></p>
            <p className="homePage__text">Я фронтенд разработчик. Специализируюсь на библиотеке React.</p>
        </div>
    );
}

export default Home;