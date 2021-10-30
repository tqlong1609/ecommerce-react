import React from 'react'
import { RouteComponentProps } from 'react-router';
import { DESCRIPTION, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants';
const AboutScreen: React.FC<RouteComponentProps> = (props) => {

    const onPressContact = () => {
        props.history.push('/contact')
    }

    return (
        <div className="about-container small-container">
            <h4 className="main-info">Main Info</h4>
            <h2 className="about-me">About Me</h2>
            <div className="row row-header">
                <div className="col-2">
                    <div className="img-box">
                        <img src="/images/profile.jpg" alt="profile" />
                        <div className="list-info">
                            <div className="shadow-icon">
                                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="shadow-icon">
                                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div className="shadow-icon">
                                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <p>
                        {DESCRIPTION}
                    </p>

                    <button>Download CV</button>
                    <button onClick={onPressContact}>Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default AboutScreen