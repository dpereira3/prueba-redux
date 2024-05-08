import { ADD_NEW_DATA, SELECT_DATA } from '../actions/index';

const initialState = ['Hello world', 'learn Redux'];

function Data (state = initialState, action) {
    switch(action.type){
        case ADD_NEW_DATA:
            let newState = state;
            newState.push(action.payload);
            state = newState;
            return state;
        case SELECT_DATA:
            return state;
        default:
            return state;
    }
}

export default Data;