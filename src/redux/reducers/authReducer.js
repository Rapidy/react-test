const initialState = {
  login: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
}
