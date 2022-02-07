import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,

})
let store = createStore();

export default store;