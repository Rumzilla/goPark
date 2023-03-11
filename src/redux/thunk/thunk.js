import http from "../../services/api"


import { setToken, setUserData } from "../../services/token"

import { authLoginErrorActionCreator, authLoginRequestActionCreator, authLoginSuccessActionCreator, authRegisterErrorActionCreator, authRegisterRequestActionCreator, authRegisterSuccessActionCreator } from "../actions/actions"

// ----------------------auth----------------------//
const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/register/", data)
        dispatch(authRegisterSuccessActionCreator(res.data))
        setUserData(JSON.stringify(res.data))
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.username))
        throw err
    }
}

//----

const authLoginUser = (data) => async (dispatch) => {
    dispatch(authLoginRequestActionCreator())
    try {
        const res = await http.post("http://13.115.195.252/account/token/", data)
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.token)
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.response.data.non_field_errors))
        throw err
    }
}

export default { authRegisterUser, authLoginUser}