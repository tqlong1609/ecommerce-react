import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../state/actions';
import { RouteComponentProps } from 'react-router-dom'
import { State } from '../state';
import AlertBox from '../components/AlertBox';
import LoadingBox from '../components/LoadingBox';
export interface IUserLogin {
    _id: string,
    name: string,
    email: string,
    token: string,
    isAdmin: boolean
}

const SigninScreen: React.FC<RouteComponentProps> = (props) => {
    const dispatch = useDispatch()
    const { user, isLoading, error } = useSelector((state: State) => state.userLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search.split('=')?.[1] === 'shipping' ? 'shipping' : ''
    useEffect(() => {
        if (user) {
            props.history.push('/' + redirect)
        }
    }, [user, props.history, redirect])

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onClickSignIn = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(signIn(email, password))
    }
    return (
        <div>
            <form onSubmit={onClickSignIn} className=".form">
                <div>
                    <h1>Sign In</h1>
                </div>
                {
                    isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> : null
                }
                <div>
                    <label htmlFor="email">Email address</label>
                    <input value={email} type="email" name="email" id="email" required
                        placeholder="Enter your email" onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="password">Email address</label>
                    <input value={password} type="password" name="password" id="password" required
                        placeholder="Enter your password" onChange={onChangePassword} />
                </div>
                <div>
                    <button type="submit" className="primary" >Sign In</button>
                </div>
                <div>
                    {/* New customer? <Link to={`/signup${redirect && '?redirect=' + redirect}`}>Create your account</Link> */}
                </div>
            </form>
        </div>
    );
}

export default SigninScreen
