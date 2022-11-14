import * as api from '../api'
// import { setCurrentUser } from './currentUser'

export const signup = (autoData, navigate) => async (dispatch) => {
    try{
        const {data} = await api.signUp(autoData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}


export const login =(autoData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.logIn(autoData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch(error) {
        console.log(error)
    }
}