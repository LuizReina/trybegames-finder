import {
  USER_LOGIN_SUCCESS,
  CREATE_NEW_USER,
} from '../actions';

const INITIAL_STATE = {
  isLoggedIn: false,
  userLoggedIn: {
    name: '',
    password: '',
    email: '',
  },
  usersRegisteredsList: [{
    name: 'Luiz Reina',
    password: 'adm123',
    email: 'adm@adm.com',
  }],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_NEW_USER:
    return {
      ...state,
      usersRegisteredsList: [...state.usersRegisteredsList, action.payload] };
  case USER_LOGIN_SUCCESS:
    return { ...state, userLoggedIn: action.payload, isLoggedIn: action.isLoggedIn };
  default:
    return state;
  }
};

export default userReducer;
