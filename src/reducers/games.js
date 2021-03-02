import {
  FETCH_STORE_STARTED,
  FETCH_STORE_SUCCESS,
  FETCH_STORE_FAILED,
  FETCH_GAMES_STARTED,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILED,
  GET_GAME_DETAILS_STARTED,
  GET_GAME_DETAILS_SUCCESS,
  GET_GAME_DETAILS_FAILED,
} from '../actions';

const INITIAL_STATE = {
  isFetchingGames: false,
  isDeals: true,
  selectedGame: {
    title: '',
    cheapest: 0,
    thumb: '',
    info: {
      title: '',
      steamAppId: null,
      thumb: '',
    },
    cheapestPriceEver: {
      date: 0,
      price: 0,
    },
    deals: [],
  },
  gamesList: [],
  error: {
    status: false,
    message: ''
  }
};

const gamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_STORE_STARTED:
    return {
      ...state,
      isFetchingGames: action.payload,
    };
  case FETCH_STORE_SUCCESS:
    return {
      ...state,
      gamesList: action.payload,
      isFetchingGames: action.isFetchingGames,
      isDeals: action.isDeals,
      error: { status: false, message: ''},
    };
  case FETCH_STORE_FAILED:
    return {
      ...state,
      isFetchingGames: action.isFetchingGames,
      error: { status: true, message: ''},
    };
  case FETCH_GAMES_STARTED:
    return {
      ...state,
      isFetchingGames: action.payload,
    };
  case FETCH_GAMES_SUCCESS:
    return {
      ...state,
      gamesList: action.payload,
      isFetchingGames: action.isFetchingGames,
      isDeals: action.isDeals,
      error: { status: false, message: ''},
    };
  case FETCH_GAMES_FAILED:
    return {
      ...state,
      isFetchingGames: action.isFetchingGames,
      error: { status: true, message: ''},
    };
  case GET_GAME_DETAILS_STARTED:
    return {
      ...state,
      isFetchingGames: action.payload,
    };
  case GET_GAME_DETAILS_SUCCESS:
    return {
      ...state,
      selectedGame: action.payload,
      isFetchingGames: action.isFetchingGames,
      error: { status: false, message: ''},
    };
  case GET_GAME_DETAILS_FAILED:
    return {
      ...state,
      isFetchingGames: action.isFetchingGames,
      error: { status: true, message: ''},
    };
  default:
    return state;
  }
};

export default gamesReducer;
