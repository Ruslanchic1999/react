import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Litvinchick', likesCount: 1124},
        {id: 4, message: 'Who can answer to me', likesCount: 567},
        {id: 5, message: 'I can answer', likesCount: 1}
    ],
    profile: null,
    status : ''

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfile = () => {
    return (dispatch) => {
        profileAPI.getUserProfile()
            .then(data => {
                dispatch (setUserProfile(data) );
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {

                dispatch (setStatus(data) );
            });
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response=> {
                if (response.data.resultCode === 0) {

                    dispatch (setStatus(status));
                }
            });
    }
}

export default profileReducer;