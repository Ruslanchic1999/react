
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE '

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
    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action ) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            }
        case 'SEND_MESSAGE':
            let body = {
                id: 6,
                message: state.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages]
            }
        default: return state;
    }

}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;