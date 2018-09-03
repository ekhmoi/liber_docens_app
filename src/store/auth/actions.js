import {api} from "../../api";


export default class Auth {
    static signup(params) {
        return async dispatch => {

            dispatch({type: '@app/loading.start'});
            dispatch({type: '@auth/signin.start'});
            const res = await api.auth.signup(params);

            dispatch({type: '@app/loading.stop'});
            if (res && res.auth) {
                dispatch({type: '@auth/signin.success', payload: {user: res.user, token: res.token}});
            } else {
                dispatch({type: '@auth/signin.fail', payload: {error: res}});
            }
        }
    }
}
