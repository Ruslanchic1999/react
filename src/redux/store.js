import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

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
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'How are you?'},
                {id: 5, message: 'Where is you it-area?'},

            ],
            newMessageBody: ''
        },
        sidebarPage: {}
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

        let newText = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.newPostText = ('');
        this._state.profilePage.posts.push(newText);
        this._callSubscriber(store);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarePage = sidebarReducer(this._state.sidebarPage, action);
            this._callSubscriber(store)

        }

}


export default store;


