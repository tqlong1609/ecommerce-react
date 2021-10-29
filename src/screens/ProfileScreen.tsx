import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlertBox from '../components/AlertBox'
import LoadingBox from '../components/LoadingBox'
import { State } from '../state'
import { getProfileUser, resetProfileUpdate, updateProfileUser } from '../state/actions/users'

export const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch()
    const { error: errorUpdate, isLoading: isLoadingUpdate, isSuccess } =
        useSelector((state: State) => state.userUpdate)
    const { user } = useSelector((state: State) => state.userLogin)
    const [name, setName] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [confirmPassword, setConfirmPassword] = useState<string | undefined>()

    const { error, isLoading, userProfile } = useSelector((state: State) => state.userProfile)
    useEffect(() => {
        if (!userProfile) {
            user?._id && dispatch(getProfileUser(user?._id))
        } else {
            setName(user?.name)
            setEmail(user?.email)
        }
    }, [dispatch, userProfile, user?._id])
    useEffect(() => {
        dispatch(resetProfileUpdate())
    }, [])
    const submitHandle = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Password and confirm password not match')
        } else {
            dispatch(updateProfileUser({
                name,
                email,
                password
            }))
        }
    }
    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <h2>User Profile</h2>
                </div>
                {isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> : <>
                    {
                        isLoadingUpdate ? <LoadingBox /> : errorUpdate ?
                            <AlertBox variant="danger">{errorUpdate}</AlertBox> : isSuccess ?
                                <AlertBox variant="info">Update Success</AlertBox> : null
                    }
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Enter confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="btn-checkout">
                    <button className="btn square-o">Update</button>
                </div>
                </>}
            </form>
        </div>
    );
}