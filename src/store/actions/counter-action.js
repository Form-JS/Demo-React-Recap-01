import { createAction } from '@reduxjs/toolkit';

// Implementation simple
export const counterIncrementOld = (step = 1) => ({
    type: 'counter/increment',
    payload: step
});

const action1 = counterIncrementOld();
console.log(action1);


// Implementation avec le toolkit
export const counterIncrement = createAction('counter/increment');

const action2 = counterIncrement();
console.log(action2);


// Implementation customiser avec le toolkit
export const counterIncrementCustom = createAction('counter/increment', (step = 1) => ({
    payload: step
}));

const action3 = counterIncrementCustom();
console.log(action3);


// Possibilité d'obtenir le type de l'action via la fonction "action"
console.log(counterIncrementCustom.type);
