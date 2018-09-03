const initialState = {
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '@app/loading.start': {
            return { ...state, loading: true };
        }

        case '@app/loading.stop': {
            return { ...state, loading: false };
        }

        default:
            return state;
    }
}
