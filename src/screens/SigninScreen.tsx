import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom';

interface SigninScreenProps {
    name: string
}
const SigninScreen: React.FC<SigninScreenProps> = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value && setEmail(e.target.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value && setPassword(e.target.value)
    }
    const onClickSignIn = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <div>
            <form action="onSignIn" className=".form">
                <div>
                    <h1>Sign In</h1>
                </div>
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
                    <button type="submit" className="primary" onClick={onClickSignIn}>Sign In</button>
                </div>
                <div>
                    New customer? <Link to={'/signUp.html'}>Create your account</Link>
                </div>
            </form>
        </div>
    );
}

export default SigninScreen
