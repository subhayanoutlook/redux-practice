import {button} from "./buttonTypes";

export const leftButtonClicked=(position,text)=>({
    type:button[`LEFT_${position.trim().toUpperCase()}_BUTTON_CLICKED`],
    payload:text
});

export const rightButtonClicked=(position,text)=>({
    type:button[`RIGHT_${position.trim().toUpperCase()}_BUTTON_CLICKED`],
    payload:text
});

export const reset=()=>({
    type:button.RESET
})