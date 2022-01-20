import { rerenderEntireTree }  from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Litvinchick', likesCount: 1124},
            {id: 4, message: 'Who can answer to me', likesCount: 567},
            {id: 5, message: 'I can answer', likesCount: 1}
        ],
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

        ]
    },
}
   export const addPost = (postMessage) => {
        let newPost = {
            id: 6,
            message: postMessage,
            likesCount: 0,
        };
        state.profilePage.posts.push(newPost);
       rerenderEntireTree(state);
   }





export default state;
