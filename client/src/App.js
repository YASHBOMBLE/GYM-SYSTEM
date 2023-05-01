import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home/Home.js';
import Login from './views/Login/Login.js'
import Signup from './views/Signup/Signup.js';
import Profile from "./views/Profile/Profile.js"
import Viewexercise from './views/Viewexercise/Viewexercise.js';
import Addtrainer from './views/Addtrainer/Addtrainer.js';
import Addexercise from './views/Addexercise/Addexercise.js';
import Viewtrainer from './views/Viewtrainer/Viewtrainer.js';
import Viewusers from './views/Viewusers/Viewusers.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewexercise" element={<Viewexercise />} />
          <Route path="/addtrainer" element={<Addtrainer />} />
          <Route path="/addexercise" element={<Addexercise />} />
          <Route path="/vewTrainer" element={<Viewtrainer />} />
          <Route path="/vewUsers" element={<Viewusers />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
