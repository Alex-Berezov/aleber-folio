import React from 'react';
import './contacts.css'

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts__title block__title">
                <h2>Портфолио</h2>
                <span/>
            </div>
            <div className="contacts__contactsForm">
                <div className="getInTouch">
                    <div className="title">Оставьте сообщение</div>
                    <form>
                        <div className="form_field">
                            <label htmlFor="contact_form_name">Укажите Ваше имя*</label>
                            <input type="text" name="name" id="contact_form_name"/>
                        </div>
                        <div className="form_field">
                            <label htmlFor="contact_form_email">Укажите Ваш email*</label>
                            <input type="text" name="email" id="contact_form_email"/>
                        </div>
                        <div className="form_field">
                            <label htmlFor="contact_form_subject">Укажите тему сообщения*</label>
                            <input type="text" name="subject" id="contact_form_subject"/>
                        </div>
                        <div className="form_field">
                            <label htmlFor="contact_form_message">Укажите тему сообщения*</label>
                            <textarea name="message" id="contact_form_message" cols="30" rows="6"></textarea>
                        </div>
                        <button className="button" type="submit">Отправить сообщение</button>
                    </form>
                </div>
                <div className="connection">
                    <div className="connection_infoblock">
                        <div className="infoblock_title">Мессенджеры</div>
                        <div className="infoblock_item">

                        </div>
                        <div className="infoblock_item"></div>
                        <div className="infoblock_item"></div>
                    </div>
                    <div className="connection_infoblock"></div>
                    <div className="connection_infoblock"></div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;