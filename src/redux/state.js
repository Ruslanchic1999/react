const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Litvinchick', likesCount: 1124},
                {id: 4, message: 'Who can answer to me', likesCount: 567},
                {id: 5, message: 'I can answer', likesCount: 1}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [

                {id: 1, name: 'Ruslan'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Ali'},
                {id: 4, name: 'Pasha'},
                {id: 5, name: 'Polya'},
                {id: 7, name: 'Dasha'},
            ],

            messages: [
                {message: 'Hi'},
                {message: 'Hi'},
                {message: 'Hi'},
                {message: 'How are you?'},
                {message: 'Where is you it-area?'},

            ],
            newDialogText: "Nikita",
            newMessageText: "asas"
        },

    },
    _callSubscriber() {
        console.log('State changed');

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {

        return this._state
    },

    _addPost() {

        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.newPostText = ('');
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            this._addPost()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._updateNewPostText(action.newText)
        }

    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

// export const addDialog = () => {
//     let newDialog ={
//         id: 8,
//         name: state.dialogsPage.newDialogText,
//     }
//     state.dialogsPage.dialogs.push (newDialog);
//     state.dialogsPage.newDialogText = ('');
//
//     rerenderEntireTree(state);
// }
// export const addMessage = () => {
//     let newMessage = {
//         message: state.dialogsPage.newMessageText,
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = ('');
//
//     rerenderEntireTree(state);
// }


export default store;


