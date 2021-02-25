import React from 'react';

import Lines from "../../components/lines/Lines";
import './resume.css'

function Resume() {
    return (
        <div className="resume">
            <Lines/>

            <div className="resume__skills">
                <div className="resume__skills_title block__title">
                    <h2>Мои скилы</h2>
                    <span/>
                </div>
                <div className="resume__skills_progressBars">
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>ReactJS</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">40%</div>
                            <div className="progressBar__inner_container">
                                <span className="react"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>JavaScript</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">30%</div>
                            <div className="progressBar__inner_container">
                                <span className="javascript"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>HTML</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">70%</div>
                            <div className="progressBar__inner_container">
                                <span className="html"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>CSS</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">70%</div>
                            <div className="progressBar__inner_container">
                                <span className="css"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>PhotoShop</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">60%</div>
                            <div className="progressBar__inner_container">
                                <span className="photoshop"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <div className="progressBar__title">
                            <h4>Figma</h4>
                        </div>
                        <div className="progressBar__inner">
                            <div className="progressBar__inner_procentage">50%</div>
                            <div className="progressBar__inner_container">
                                <span className="figma"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume__info">
                <div className="resume__info_title block__title">
                    <h2>Резюме</h2>
                    <span/>
                </div>
                <div className="resume__info_experience">
                    <div className="experience__block">
                        <div className="experience__block_summary">
                            <h4>2020 - по настоящее время</h4>
                        </div>
                        <div className="experience__block_details">
                            <p>
                                Изучаю JavaScript и библиотеку React. Прошел 5 онлайн курсов, разработал социальную сеть,
                                интернет магазин, ToDo лист, чат и проект по сокращению ссылок на стеке MERN.
                                Учебные проекты можно посмотреть в разделе Портфолио.
                            </p>
                        </div>
                    </div>
                    <div className="experience__block">
                        <div className="experience__block_summary">
                            <h4>2019 - по настоящее время</h4>
                        </div>
                        <div className="experience__block_details">
                            <p>
                                Самостоятельно научился верстать сайты, интегрировать их на WordPress. По настоящее время
                                занимаюсь разработкой сайтов на WP.
                            </p>
                        </div>
                    </div>
                    <div className="experience__block">
                        <div className="experience__block_summary">
                            <h4>2012 - 2019</h4>
                        </div>
                        <div className="experience__block_details">
                            <p>
                                Работал в интернет-маркетинге 6 лет. Занимался настройкой
                                рекламы(контекст, медийка, социалки), SEO продвижением, проектировал сайты и лэндинги.
                                На последнем месте работы руководил отделом интернет-маркетинга, в команде было 6 человек.
                            </p>
                        </div>
                    </div>
                    <div className="experience__block">
                        <div className="experience__block_summary">
                            <h4>2004 - 2012</h4>
                        </div>
                        <div className="experience__block_details">
                            <p>
                                Начал карьеру в продажах, в компании Евросеть. Затем перешёл в банковскую сферу. Работал
                                в таких банках как Русский Стандарт, Альфа банк, Траст, Тинькофф. Но потом, выгорел и
                                работа стала в тягость.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;