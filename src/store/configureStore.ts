import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";

const rootReducer = combineReducers(
    {
        count: counterReducer
    }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;