import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { State } from '../state';

export const RedirectSignInRoute: React.FC<any> = ({ component: Component, ...rest }) => {
    const { user } = useSelector((state: State) => state.userLogin)
    return (
        <Route
            {...rest}
            render={props => user ? <Component {...props} /> : <Redirect to="/signin" />}
        >
        </Route>
    );
}