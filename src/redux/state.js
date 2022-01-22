import {rerenderEntireTree} from "../render";


let state = {
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

}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ('');

    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;

    rerenderEntireTree(state);
}
export let addDialog = () => {
    let newDialog ={
        id: 8,
        name: state.dialogsPage.newDialogText,
    }
    state.dialogsPage.dialogs.push (newDialog);
    state.dialogsPage.newDialogText = ('');

    rerenderEntireTree(state);
}
export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ('');

    rerenderEntireTree(state);
}



export default state;


