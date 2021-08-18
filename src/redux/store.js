import {createStore} from "redux";
import buttonReducer from "./button/buttonReducer";
const store=createStore(buttonReducer);

export default store;