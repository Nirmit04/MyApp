import { actionTypes } from "./actionTypes";

export const initialState = {
    counterValue: 0,
    whoDidThis: 'Yuvraj'
}
 function counterReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        case actionTypes.CHANGENAME: {
            return {
                ...state,
                whoDidThis: action.payload
            }
        }
        case actionTypes.CHANGENAME: {
            return {
                ...state,
                whoDidThis: action.payload,
                counterValue: state.counterValue + 1
            }
        }
        default:
            return state;
            break;
    }
}
export default counterReducer