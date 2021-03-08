import React from 'react'
import ReactDOM from 'react-dom'
import {Formik, Field, Form} from 'formik'

import './contactForm.css'

const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    subject: '',
                    message: ''

                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500))
                    alert('К сожалению, Ваше сообщение не было отправлено. При созвоне спросите у меня почему так вышло.')
                    alert(JSON.stringify(values, null, 2))
                }}
                >
                <Form>
                    <div className="form_field">
                        <label htmlFor="firstName">Укажите Ваше имя*</label>
                        <Field type="text" name="firstName" id="firstName"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="email">Укажите Ваш email*</label>
                        <Field type="email" name="email" id="email"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="subject">Укажите тему сообщения*</label>
                        <Field type="text" name="subject" id="subject"/>
                    </div>
                    <div className="form_field">
                        <label htmlFor="message">Укажите тему сообщения*</label>
                        <Field as="textarea" name="message" id="message" cols="30" rows="6"></Field>
                    </div>
                    <button className="button" type="submit">Отправить</button>
                </Form>
            </Formik>
            </>
            )
            }
export default ContactForm