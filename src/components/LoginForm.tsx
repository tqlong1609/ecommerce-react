import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../state'
import { signIn } from '../state/actions'
import AlertBox from './AlertBox'
import LoadingBox from './LoadingBox'

const LoginForm = React.forwardRef<HTMLFormElement>((props, ref) => {
    const dispatch = useDispatch()
    const { isLoading, error } = useSelector((state: State) => state.userLogin)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
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
        <>
            {isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> :
                <form id="LoginForm" ref={ref} onSubmit={onClickSignIn}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={onChangeEmail}
                        value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={onChangePassword}
                        value={password}
                    />
                    <button type="submit" className="btn">Login</button>
                    <a href="#">Forgot Password</a>
                </form>
            }
        </>
    );
})

LoginForm.displayName = "LoginForm"

export default LoginForm