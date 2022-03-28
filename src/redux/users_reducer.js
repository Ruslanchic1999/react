import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_TOGGLE_FETCHING = 'IS_TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS'

let initialState = {
    users: [],
    pageSize: 60,
    totalCount: 73,
    currentPage: 1,
    isFetching: false,
    followingInProcess: [2,3]
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case  FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u;
                })
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case IS_TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching ? [...state.followingInProcess, action.userId] :
                    state.followingInProcess.filter(id => id != action.userId)
            }
            default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})
export const toggleInFollowingProcess = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching ,userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch (isToggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch (isToggleFetching(false));
                dispatch( setUsers(data.items));
                dispatch(setTotalCount(data.totalCount))
            });
    }
}

export const getUsersCurrentPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch (isToggleFetching(true));
        dispatch (setCurrentPage(pageNumber));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
           dispatch (isToggleFetching(false));
            dispatch (setUsers(data.items));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch ( toggleInFollowingProcess(true, userId) );
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch ( unfollowSuccess (userId));
                }
                dispatch (toggleInFollowingProcess(false, userId)) ;
            })
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch (toggleInFollowingProcess(true, userId));

        usersAPI.follow(userId)

            .then(data => {
                if (data.resultCode === 0) {
                    dispatch (followSuccess(userId));
                }
                dispatch (toggleInFollowingProcess(false, userId) );
            })
    }
}



export default usersReducer;