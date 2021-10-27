import React, { Fragment, useRef } from 'react'
const SigninScreen: React.FC = () => {
    const loginForm = useRef<HTMLFormElement>(null)
    const registerForm = useRef<HTMLFormElement>(null)
    const indicator = useRef<HTMLHRElement>(null)
    const onRegisterIndicator = () => {
        indicator.current!.style.transform = "translateX(190%)"
        registerForm.current!.style.transform = "translateX(300px)";
        loginForm.current!.style.transform = "translateX(300px)";
    };

    const onLoginIndicator = () => {
        indicator.current!.style.transform = "translateX(30%)";
        registerForm.current!.style.transform = "translateX(0)";
        loginForm.current!.style.transform = "translateX(0)";
    };
    return (
        <Fragment>
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="/images/image1.png" alt="image1" width="100%" />
                        </div>
                        <div className="col-2">
                            <div className="form-account">
                                <div className="header-form">
                                    <span className="disable-select"
                                        onClick={onLoginIndicator}
                                    >Login</span
                                    >
                                    <span className="disable-select"
                                        onClick={onRegisterIndicator}
                                    >Register</span
                                    >
                                    <hr id="Indicator" ref={indicator} />
                                </div>
                                <form id="LoginForm" ref={loginForm}>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <button type="submit" className="btn">Login</button>
                                    <a href="#">Forgot Password</a>
                                </form>

                                <form id="RegisterForm" ref={registerForm}>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <button type="submit" className="btn">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SigninScreen