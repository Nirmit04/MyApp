import { actionTypes } from "./actionTypes"

export const counterIncrement = (data: any) => {
    return {
        type: actionTypes.INCREMENT,
        payload: data
    }
}
export const counterDecrement = (data: any) => {
    return {
        type: actionTypes.DECREMENT,
        payload: data
    }
}

export const nameChange = (data: any) => {
    return {
        type: actionTypes.CHANGENAME,
        payload: data
    }
}
export const incrementAndNameChange = (data: any) => {
    return {
        type: actionTypes.CHANGEA_AND_INNCREMENT,
        payload: data
    }
}
