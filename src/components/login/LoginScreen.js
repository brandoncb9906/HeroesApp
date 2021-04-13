import React, { useContext, useReducer } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'


export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext)


    const handleLogin = () => {
        //history.push('/marvel');
        //history.replace('/');
        //{
        //    name: 'Brandon'
        //}

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Brandon'
            }
        });

        history.replace(lastPath);
    }

    return (
        <div>
            <h1 className="container mt-5">Login</h1>
            <hr />
            <button
                className="btn btn-primary m-5"
                onClick={handleLogin}
            >Login</button>
        </div>
    )
}
