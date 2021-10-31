import React, { FormEvent, useRef } from 'react'
import { ADDRESS, EMAIL, NUMBER_PHONE } from '../constants/info';
import emailjs from 'emailjs-com'

const ContactScreen: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_bfsl917', 'template_lxc88rl', form.current as HTMLFormElement, 'user_n8nH3r7Xhb5Iuc4BhmeYs').then(res => {
            alert('Send Email Success')
        }).catch(err => {
            alert(err)
        })
        form.current?.reset()
    };

    return (
        <div className="about-container">
            <h4 className="main-info">Contact</h4>
            <h2 className="about-me">Get In Touch</h2>
            <div className="info-container">
                <div className="phone-container info-box">
                    <i className="fas fa-phone"></i>
                    <h5>Phone</h5>
                    <p>{NUMBER_PHONE}</p>
                </div>
                <div className="email-container info-box">
                    <i className="fas fa-envelope"></i>
                    <h5>Email</h5>
                    <p>{EMAIL}</p>
                </div>
                <div className="address-container info-box">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>Address</h5>
                    <p>{ADDRESS}</p>
                </div>
            </div>
            <form onSubmit={sendEmail} ref={form}>
                <div className="row row-info">
                    <div className="col-2 input-info">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="col-2">
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Message"
                        ></textarea>
                    </div>
                </div>
                <div>
                    <button className="btn-send" type="submit">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactScreen