import * as types from '../constants/ActionTypes';


export function changeLoginAuth({username, password, rawData}) {
    return {
        type: types.CHANGE_LOGIN_AUTH,
        username: username,
        password: password,
        rawData: rawData
    }
}