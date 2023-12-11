import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import IsAuth from './components/IsAuth/IsAuth.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import About from './pages/About/About.jsx';
import Anunciosv1 from './pages/Anuncios/Anunciosv1.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/Register/Register.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/profile"
              element={
                <IsAuth>
                  <Profile />
                </IsAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/About" element={<About />} />
            <Route path="/Anunciosv1" element={<Anunciosv1 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
