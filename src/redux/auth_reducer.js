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
                ...action.data,
                isAuth: true
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

export const setLoginUserData = (id, login, email) => ({type: SET_LOGIN_USER_DATA, data: {id, login, email}})
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})


export const AuthMe = (id, login, email) => {

    return (dispatch) => {
        dispatch (isToggleFetching(true));
        AuthMeAPI.getAuthMe()

            .then(data => {

                dispatch (isToggleFetching(false));
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                   dispatch (setLoginUserData(id, login, email));
                }
            });
    }
}


export default authReducer;