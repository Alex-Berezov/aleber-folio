import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm'

import './contacts.css'
import whatsapp from '../../assets/img/whatsapp.svg'
import telegram from '../../assets/img/telegram.svg'
import skype from '../../assets/img/skype.svg'
import gmail from '../../assets/img/gmail.svg'

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts__title block__title">
                <h2>Контакты</h2>
                <span/>
            </div>
            <div className="contacts__contactsForm">
                <div className="getInTouch">
                    <div className="title">Оставьте сообщение</div>
                    <ContactForm />
                </div>
                <div className="connection">
                    <div className="connection_infoblock">
                        <div className="infoblock_title">Свяжитесь со мной</div>
                        <div className="infoblock_item">
                            <span><img src={whatsapp} alt="whatsappIcon"/> +374 41-93-93-41</span>
                            <span><img src={telegram} alt="telegram"/>@Aleber613</span>
                            <span><img src={skype} alt="skype"/>alex.berezov</span>
                            <span><img src={gmail} alt="gmail"/>aleber197@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;