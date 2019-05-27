import { createStore } from 'redux';

const initalState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UNDO = "UNDO";
export const REDO = "REDO";

function reducer(state = initalState, action){
    switch(action.type){
        case INCREMENT:
            return {previousValues: [state.currentValue, ...state.previousValues],
                currentValue: state.currentValue + action.payload,
                 futureValues: []
                };

        // case INCREMENT:
        // return Object.assign({}, state, {currentValue: state.currentValue + 1 })

        case DECREMENT:
            return {previousValues: [state.currentValue, ...state.previousValue],
                currentValue: state.currentValue + action.payload,
                 futureValues: []
                };

        // case DECREMENT:
        //     return Object.assign({}, state, {currentValue: state.currentValue - 1 })

        case UNDO: 
            return {
                ...state, 
                currentValue: state.previousValues[0], 
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1, 9)
            };
        
        case REDO: 
        return {
            ...state, 
            currentValue: state.previousValues[0], 
            futureValues: [state.currentValue, ...state.futureValues],
            previousValues: state.previousValues.slice(1, 9)
        };
        
        default:
        return state;
    }
}



export default createStore(reducer) 