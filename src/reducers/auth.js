import {
    LOGIN_S,
    LOGIN_F,
    LOGOUT,
} from '../constants/types';

const initialState = {
    user: undefined,
    isLoggedIn:false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_S:
            
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user: action.payload ,isLoggedIn:true };
        case LOGIN_F:
        case LOGOUT:
            localStorage.removeItem('user');
            return initialState;
        default:
            return state;
    }
}

export default authReducer;