const LOGOUT = "LOG_OUT"
const USERS_LIST = "USERS_LIST"



const defaultState = {
    currentUser: {},
    isAuth: false,
    list: true,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case USERS_LIST:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                list: true,
            }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                list: false,
            }
        default:
            return state
    }
}

export const setList = user => ({ type: USERS_LIST, payload: user })

export const logOut = () => ({ type: LOGOUT })