import { getStoreList, fetchGamesByTitle, fetchGameById } from '../services/apiService';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const FETCH_STORE_STARTED = 'FETCH_STORE_STARTED';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILED = 'FETCH_STORE_FAILED';
export const FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const GET_GAME_DETAILS_STARTED = 'GET_GAME_DETAILS_STARTED';
export const GET_GAME_DETAILS_SUCCESS = 'GET_GAME_DETAILS_SUCCESS';
export const GET_GAME_DETAILS_FAILED = 'GET_GAME_DETAILS_FAILED';

export const  createNewUserAction = (item) => ({
  type: CREATE_NEW_USER,
  payload: item,
})

export const userLoginSuccessAction = (item) => ({
  type: USER_LOGIN_SUCCESS,
  payload: item,
  isLoggedIn: true,
});

export const fetchStoreStarted = () => ({
  type: FETCH_STORE_STARTED,
  payload: true,
});

export const fetchStoreSuccessAction = (success) => ({
  type: FETCH_STORE_SUCCESS,
  payload: success,
  isFetchingGames: false,
  isDeals: true,
});

export const fetchStoreFailedAction = (error) => ({
  type: FETCH_STORE_FAILED,
  payload: error,
  isFetchingGames: false,
});

export const getGamesDeals = () => (dispatch) => {
  dispatch(fetchStoreStarted());
  getStoreList()
    .then((fetchResponseSuccess) => dispatch(
      fetchStoreSuccessAction(fetchResponseSuccess)
    ))
    .catch((fetchResponseFailed) => dispatch(
      fetchStoreFailedAction(fetchResponseFailed)
    ))
};

export const fetchGamesStarted = () => ({
  type: FETCH_GAMES_STARTED,
  payload: true,
})

export const fetchGamesSuccess = (success) => ({
  type: FETCH_GAMES_SUCCESS,
  payload: success,
  isFetchingGames: false,
  isDeals: false,
})

export const fetchGamesFailed = (error) => ({
  type: FETCH_GAMES_FAILED,
  payload: error,
  isFetchingGames: false,
})

export const fetchGames = (gameTitle) => (dispatch) => {
  dispatch(fetchGamesStarted());
  fetchGamesByTitle(gameTitle)
  .then((getGamesSucces) => {
    dispatch(fetchGamesSuccess(getGamesSucces));
  })
  .catch((getGameError) => dispatch(fetchGamesFailed(getGameError)));
};

export const getGameDetailsStarted = () => ({
  type: GET_GAME_DETAILS_STARTED,
  payload: true,
})

export const getGameDetailsSuccess = (success) => ({
  type: GET_GAME_DETAILS_SUCCESS,
  payload: success,
  isFetching: false,
})

export const getGameDetailsFailed = (error) => ({
  type: GET_GAME_DETAILS_FAILED,
  payload: error,
  isFetching: false,
})

export const fetchGameDetails = (gameId) => (dispatch) => {
  dispatch(getGameDetailsStarted());
  fetchGameById(gameId)
  .then((getGamesSucces) => {
    dispatch(getGameDetailsSuccess(getGamesSucces));
  })
  .catch((getGameError) => dispatch(getGameDetailsFailed(getGameError)));
};
