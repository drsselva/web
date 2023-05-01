import { createSelectorHook, ReactReduxContext } from "react-redux";

const loading = false;

const reducer = (state = { loading }, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: true }
        case 'SET_LOGIN':
            return { ...state, loading: true}
        case 'SET_LOGIN_SUCCESS':
            return { ...state, loading: false, logUsers: action.data }
        case "SET_SIGNUP":
            return { ...state, loading: true }
        case 'SET_SIGNUP_SUCCESS':
            return { ...state, loading: false, logUsers: action.data }
    }

}

export default reducer;