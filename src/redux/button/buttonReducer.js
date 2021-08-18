import {button} from "./buttonTypes";

const initialState={
    leftTop:'Left Top',
    leftDown:'Left Down',
    rightTop:"Right Top",
    rightDown:"Right Down"
}

const buttonReducer=(state=initialState,action)=>{
    switch(action.type){
        case button.LEFT_TOP_BUTTON_CLICKED:
            return {
                ...state,
                leftTop:action.payload,
            }
        case button.LEFT_DOWN_BUTTON_CLICKED:
            return{
                ...state,
                leftDown:action.payload
            }
        case button.RIGHT_TOP_BUTTON_CLICKED:
            return {
                ...state,
                rightTop:action.payload
            }
        case button.RIGHT_DOWN_BUTTON_CLICKED:
            return {
                    ...state,
                    rightDown:action.payload
            }
        default:return state;
    }
};

export default buttonReducer;