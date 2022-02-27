const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Litvinchick', likesCount: 1124},
        {id: 4, message: 'Who can answer to me', likesCount: 567},
        {id: 5, message: 'I can answer', likesCount: 1}
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts],
                newPostText: ''
            }
        case 'UPDATE_NEW_POST_TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: "ADD_POST"})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;