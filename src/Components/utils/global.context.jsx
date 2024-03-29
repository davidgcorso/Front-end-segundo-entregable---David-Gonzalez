import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import PropTypes from "prop-types"; 

export const GlobalContext = createContext();

const ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_DATA: "SET_DATA",
  SET_ERROR: "SET_ERROR",
  SET_LOADING: "SET_LOADING",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTIONS.SET_DATA:
      return { ...state, data: action.payload, loading: false, error: null };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: true };
      case ACTIONS.ADD_TO_FAVORITES:
        if (!state.favorites.some((user) => user.id === action.payload.id)) {
          return { ...state, favorites: [...state.favorites, action.payload] };
        }
        return state; 
      case ACTIONS.REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };

export const GlobalProvider = ({ children }) => {
  const initialState = {
    theme: "",
    data: [],
    loading: false,
    error: null,
    favorites: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: ACTIONS.SET_LOADING });
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: ACTIONS.SET_DATA, payload: response.data });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: ACTIONS.SET_THEME, payload: theme });
  };
  
  const contextValue = {
    state,
    setTheme,
    addToFavorites: (user) => dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: user }),
    removeFromFavorites: (user) => dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: user }),
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
