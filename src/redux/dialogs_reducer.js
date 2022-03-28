
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}
const dialogsReducer = (state = initialState, action ) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 6,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, body],

            }

        default: return state;
    }

}

export const sendMessage = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody})


export default dialogsReducer;