import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    
} from "./actionTypes";

const initialState = {
    token: localStorage.getItem('token'),
    userCount: 0,
    loading: true,
    error: null,
    msg: null,
    user:null
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action; 

    switch (type) {
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: payload.user,
                msg: payload.msg,
            };
        case REGISTER_USER:
            return {
                ...state,
                msg: payload.msg,
            };
        case GET_AUTH_USER:
            
            return {
                ...state,
                user: payload.user,
                msg: payload.msg,
            };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
            };
       
        default:
            return state;
    }
};

export default authReducer;
