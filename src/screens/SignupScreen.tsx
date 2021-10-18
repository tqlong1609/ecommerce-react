import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AlertBox from '../components/AlertBox';
import LoadingBox from '../components/LoadingBox';
import { RouteComponentProps } from 'react-router-dom'
import { State } from '../state';
import { registerUser } from '../state/actions';

export const SignupScreen: React.FC<RouteComponentProps> = (props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [errorValidate, setErrorValidate] = useState<string>('')
    const { error, isLoading } = useSelector((state: State) => state.userRegister)
    const { user } = useSelector((state: State) => state.userLogin)
    const redirect = props.location.search.split('=')?.[1] === 'shipping' ? 'shipping' : ''

    useEffect(() => {
        if (user) {
            props.history.push('/' + redirect)
        }
    }, [user, props.history, redirect])


    const dispatch = useDispatch()

    const onSubmitSignUp = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setErrorValidate('Password and confirm password not match')
        } else if (!name || !email || !password || !confirmPassword) {
            setErrorValidate('Input value are not validate')
        } else {
            setErrorValidate('')
            dispatch(registerUser({ email, name, password }))
        }
    }

    return (
        <div>
            <form className=".form" onSubmit={onSubmitSignUp}>
                <h1>Create Account</h1>
                {
                    errorValidate && <AlertBox variant={'danger'}>{errorValidate}</AlertBox>
                }
                {
                    error && <AlertBox variant="danger">{error}</AlertBox>
                }
                {
                    isLoading && <LoadingBox />
                }
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={value => setName(value.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" onChange={value => setEmail(value.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={value => setPassword(value.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" onChange={value => setConfirmPassword(value.target.value)} />
                </div>
                <button type="submit" className="primary block">Register</button>
                <div>
                    Already have an account? <Link to={`/signin${redirect && '?redirect=' + redirect}`}>Sign-In</Link>
                </div>
            </form>
        </div>
    );
}