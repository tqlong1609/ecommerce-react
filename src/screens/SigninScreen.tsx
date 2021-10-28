import React, { Fragment, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { State } from '../state'

const SigninScreen: React.FC<RouteComponentProps> = (props) => {
    const loginForm = useRef<HTMLFormElement>(null)
    const registerForm = useRef<HTMLFormElement>(null)
    const indicator = useRef<HTMLHRElement>(null)
    const { user } = useSelector((state: State) => state.userLogin)

    const redirect = props.location.search.split('=')?.[1] === 'shipping' ? 'shipping' : ''
    useEffect(() => {
        if (user) {
            props.history.push('/' + redirect)
        }
    }, [user, props.history, redirect])

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
                                <LoginForm ref={loginForm} />
                                <RegisterForm ref={registerForm} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SigninScreen