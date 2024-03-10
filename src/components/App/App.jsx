import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { MoviesProvider } from "../../contexts/MoviesContext.js";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Profile from "../Profile/Profile.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import ProtectedRoute from "../../utils/ProtectedRoute.jsx";
import Preloader from "../Preloader/Preloader.jsx";

import { getAllMovies } from "../../utils/MoviesApi.js";
import api from "../../utils/MainApi.js";
import correctMovieFormat from "../../utils/utils.js";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip.jsx";

function App() {
  const visualHeaderPaths = ["/", "/movies", "/saved-movies", "/profile"];
  const visualFooterPaths = ["/", "/movies", "/saved-movies"];

  const returnLocalFilms = () => {
    const localMovies = localStorage.getItem("movies");
    return localMovies ? JSON.parse(localStorage.getItem("movies")) : [];
  };

  const checkSavedMovies = (movie) => {
    return savedMovies.some(
      (i) => i._id === movie._id || i.movieId === movie.movieId,
    );
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [loadStatus, setLoadStatus] = useState({
    status: "",
    message: "",
  });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [movies, setMovies] = useState(returnLocalFilms());
  const [savedMovies, setSavedMovies] = useState([]);

  const path = useLocation().pathname;
  const navigate = useNavigate();

  // PAGE STARTUP
  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }
    api.setAuthHeaders(token);
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [token, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies.reverse());
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    getAllMovies()
      .then((movies) => {
        const correctedMovies = correctMovieFormat(movies);
        setMovies(correctedMovies);
        localStorage.setItem("movies", JSON.stringify(correctedMovies));
      })
      .catch((err) => console.log(err));
  }, []);

  // USER LOGIN AND REGISTER
  const handleLogin = (dataLogin) => {
    api
      .authorize(dataLogin)
      .then((dataUser) => {
        setIsInfoTooltipOpen(true);
        setToken(dataUser.token);
        setLoadStatus({
          status: true,
          message: "Вы успешно вошли!",
        });
        localStorage.setItem("jwt", dataUser.token);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setLoadStatus({
          status: false,
          message: "Что-то пошло не так! Попробуйте еще раз.",
        });
        console.log(err);
      });
  };

  const handleRegister = (dataRegister) => {
    api
      .register(dataRegister)
      .then(() => {
        setIsInfoTooltipOpen(true);
        setLoadStatus({
          status: true,
          message: "Вы успешно зарегистрировались!",
        });
        setIsLoggedIn(true);
        handleLogin({
          email: dataRegister.email,
          password: dataRegister.password,
        });
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setLoadStatus({
          status: false,
          message: "Что-то пошло не так! Попробуйте еще раз.",
        });
        console.log(err);
      });
  };

  const updateUserInfo = async ({ name, email }) => {
    try {
      const data_1 = await api.changeUserInfo({
        name: name,
        email: email,
      });
      setCurrentUser(data_1);
      setIsInfoTooltipOpen(true);
      setLoadStatus({
        status: true,
        message: "Вы обновили свои данные!",
      });
    } catch (err) {
      setIsInfoTooltipOpen(true);
      setLoadStatus({
        status: false,
        message: "Что-то пошло не так! Попробуйте еще раз!",
      });
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setToken("");
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };

  const closeInfoTooltip = () => {
    setIsInfoTooltipOpen(false);
    setLoadStatus({
      status: false,
      message: "",
    });
  };

  //MOVIE INTERACTION
  const saveMovie = (movie) => {
    api
      .saveMovie(movie)
      .then((movie) => {
        setSavedMovies((savedMovies) => [...savedMovies, movie]);
      })
      .catch((err) => console.log(err));
  };

  const unsaveMovie = (movie) => {
    const movieId =
      movie._id || savedMovies.find((i) => i.movieId === movie.movieId)._id;
    api
      .deleteSavedMovie(movieId)
      .then(() => {
        setSavedMovies((previouslySavedMovies) => {
          return previouslySavedMovies.filter(
            (savedMovie) => savedMovie._id !== movieId,
          );
        });
      })
      .catch((err) => console.log(err));
  };

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MoviesProvider>
        <div className='app'>
          {visualHeaderPaths.includes(path) && (
            <Header isLoggedIn={isLoggedIn} />
          )}
          <Routes>
            <Route path='/signin' element={<Login onLogin={handleLogin} />} />
            <Route
              path='/signup'
              element={<Register onRegister={handleRegister} />}
            />
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  loggedIn={isLoggedIn}
                  element={Movies}
                  movies={movies}
                  onSave={saveMovie}
                  onUnsave={unsaveMovie}
                  checkSavedMovies={checkSavedMovies}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  loggedIn={isLoggedIn}
                  element={SavedMovies}
                  movies={savedMovies}
                  onUnsave={unsaveMovie}
                  checkSavedMovies={checkSavedMovies}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  loggedIn={isLoggedIn}
                  element={Profile}
                  onLogout={logout}
                  onUpdate={updateUserInfo}
                />
              }
            />
            <Route path='*' element={<PageNotFound onReturn={goBack} />} />
          </Routes>
          {visualFooterPaths.includes(path) && <Footer />}
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            loadStatus={loadStatus}
            onClose={closeInfoTooltip}
          />
        </div>
      </MoviesProvider>
    </CurrentUserContext.Provider>
  );
}

export default App;
