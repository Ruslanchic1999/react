import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friend/Friends";


const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element=
                            {<Dialogs dialogs={ props.state.dialogsPage.dialogs }
                                      messages={ props.state.dialogsPage.messages }/>}/>
                        <Route path='/profile' element={<Profile
                            posts={ props.state.profilePage.posts }
                        addPost={ props.addPost }/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                        <Route path='/friends' element={<Friends />}/>

                    </Routes>
                </div>
            </div>


    );
}

export default App;
