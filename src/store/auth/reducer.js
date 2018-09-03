const initialState = {
    loggedIn: false,
    loggingIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@auth/signin.start': {
            return { ...state, loggedIn: false, loggingIn: true };
        }

        case '@auth/signin.fail': {
            return { ...state, loggedIn: false, loggingIn: false, error: action.payload.error };
        }

        case '@auth/signin.success': {
            return { ...state, loggedIn: true, /* loggingIn: false, */ user: action.payload.user, token: action.payload.token };
        }

        default:
            return state;
    }
}
