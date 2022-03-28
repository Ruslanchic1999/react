import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {ThemeProvider, theme} from "@chakra-ui/react";
import FormikLoginContainer from "./components/Login/FormikLoginContainer";





const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
               <ThemeProvider theme ={theme}>
                   <div className='app-wrapper-content'>
                       <Routes>
                           <Route path='/dialogs' element={<DialogsContainer />}/>
                           <Route path='profile' element={<ProfileContainer />}>
                               <Route path=':userId' element={<ProfileContainer />}/>
                           </Route>

                           <Route path='/news' element={<News/>}/>
                           <Route path='/login' element={<FormikLoginContainer />}/>
                           <Route path='/music' element={<Music/>}/>
                           <Route path='/setting' element={<Setting/>}/>
                           <Route path='/users' element={<UsersContainer />}/>
                           


                       </Routes>
                   </div>
               </ThemeProvider>
            </div>


    );
}

export default App;
