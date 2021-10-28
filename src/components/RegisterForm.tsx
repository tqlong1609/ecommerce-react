import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { State } from '../state'
import { registerUser } from '../state/actions'
import AlertBox from './AlertBox'
import LoadingBox from './LoadingBox'
const RegisterForm = React.forwardRef<HTMLFormElement>
    ((props, ref) => {
        const dispatch = useDispatch()
        const [name, setName] = useState<string>('')
        const [email, setEmail] = useState<string>('')
        const [password, setPassword] = useState<string>('')
        const { error, isLoading } = useSelector((state: State) => state.userRegister)

        const onSubmitSignUp = (e: React.FormEvent) => {
            e.preventDefault()
            dispatch(registerUser({ email, name, password }))
        }

        return (
            <>
                {isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> :
                    <form id="RegisterForm" ref={ref} onSubmit={onSubmitSignUp}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn">Register</button>
                    </form>
                }
            </>
        );
    })

RegisterForm.displayName = "RegisterForm"

export default RegisterForm