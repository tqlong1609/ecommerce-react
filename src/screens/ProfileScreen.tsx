import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlertBox from '../components/AlertBox'
import LoadingBox from '../components/LoadingBox'
import { State } from '../state'
import { getProfileUser } from '../state/actions/users'

export const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch()
    const { error, isLoading, userProfile } = useSelector((state: State) => state.userProfile)
    useEffect(() => {
        dispatch(getProfileUser())
    }, [dispatch])
    const submitHandle = () => {
        console.log('123');
    }
    return (
        <div>
            <form onSubmit={submitHandle}>
                <div>
                    <h2>User Profile</h2>
                </div>
                {isLoading ? <LoadingBox /> : error ? <AlertBox variant="danger">{error}</AlertBox> : <>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={userProfile?.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={userProfile?.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter password"/>
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Enter confirm password"/>
                    </div>
                    <button className="primary block">Update</button>
                </>}
            </form>
        </div>
    );
}