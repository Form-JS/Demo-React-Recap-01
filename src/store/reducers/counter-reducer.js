import { createReducer } from '@reduxjs/toolkit';
import { counterIncrement } from '../actions/counter-action';

const initialState = {
    count: 1
};

// Implementation du reducer simple
const counterReducerOld = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/increment':
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
};

// Implementation du reducer avec toolkit
export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(counterIncrement.type, (state, action) => {
            return {
                count: state.count + action.payload
            };
        });
});