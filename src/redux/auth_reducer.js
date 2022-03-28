import {AuthMeAPI} from "../api/api";

const SET_LOGIN_USER_DATA = 'SET_LOGIN_USER_DATA';
const IS_TOGGLE_FETCHING = 'IS_TOGGLE_FETCHING';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOGIN_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }

        case IS_TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
            default:
            return state;
    }

}

export const setLoginUserData = (email, id, login ,isAuth) => ({type: SET_LOGIN_USER_DATA, payload: {email, id, login, isAuth}})
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})


export const AuthMe = () => {
    return (dispatch) => {
        dispatch (isToggleFetching(true));
        AuthMeAPI.getAuthMe()

            .then(response => {

                dispatch (isToggleFetching(false));
                if (response.data.resultCode === 0) {
                 debugger;
                   dispatch (setLoginUserData( response.data.data.email,  response.data.data.id, response.data.data.login , true ));
                }
            });
    }
}

export const Login = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthMeAPI.login(email, password, rememberMe)

            .then(response => {
     if (response.data.resultCode === 0) {

                    dispatch (AuthMe())
                }
            });
    }
}
export const Logout = () => {
    return (dispatch) => {
        AuthMeAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch (setLoginUserData(null, null, null, false))
                }
            });
    }
}


export default authReducer;