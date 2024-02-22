import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Profile from "../Profile/Profile.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

import { allMovies, savedMovies } from "../../utils/constants.js";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const visualHeaderPaths = ["/", "/movies", "/saved-movies", "/profile"];
const visualFooterPaths = ["/", "/movies", "/saved-movies"];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/')
  };

  return (
    <div className='app'>
      {visualHeaderPaths.includes(path) && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies movies={allMovies} />} />
        <Route
          path='/saved-movies'
          element={<SavedMovies movies={savedMovies} />}
        />
        <Route path='/profile' element={<Profile onLogout={logout} />} />
        <Route path='*' element={<PageNotFound onReturn={goBack} />} />
      </Routes>
      {visualFooterPaths.includes(path) && <Footer />}
    </div>
  );
}

export default App;
