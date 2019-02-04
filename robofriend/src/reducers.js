import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
    searchField: ''
};

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SEARCH_FIELD:
            returnObject.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};