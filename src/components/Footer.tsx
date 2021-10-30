import React from 'react'
import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants';

export const Footer: React.FC = () => {

    const onShowAlert = () => {
        alert('Sorry! This function is not completed yet')
    }

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Out App</h3>
                        <p>Download App for android and ios mobile phone</p>
                        <div className="logo-app">
                            <img src="/images/app-store.png" alt="app-store" onClick={onShowAlert} />
                            <img src="/images/play-store.png" alt="app-store" onClick={onShowAlert} />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/logo-white.png" alt="logo-white" />
                        <p>
                            Our purpose Is To Sustainably Make the Pleasure and Benefits of
                            Sports Accessible to The Many
                        </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Follow Me</h3>
                        <ul>
                            <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}