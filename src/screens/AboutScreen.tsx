import React from 'react'
import { RouteComponentProps } from 'react-router';
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
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className="shadow-icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="shadow-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        distinctio rerum omnis numquam a temporibus expedita aliquam nemo
                        consequuntur ut aperiam, impedit velit quas, consectetur eos qui
                        asperiores eaque quae.
                    </p>

                    <button>Download CV</button>
                    <button onClick={onPressContact}>Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default AboutScreen