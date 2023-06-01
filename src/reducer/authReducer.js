function authReducer(state, action) {
  switch (action.type) {
    case "authLoad":
      return {
        ...state,
        loading: true,
      };
    case "User-pass":
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload,
      };
    case "User-fail":
      return {
        ...state,
        loading: false,
        isAuth: false,
      };
    case "User-logout": {
      return {
        loading: false,
        user: null,
        isAuth: false,
      };
    }
    default:
      return;
  }
}

export { authReducer };
