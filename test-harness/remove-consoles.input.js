/**
 * Created by psenger on 12/06/2016.
 */ 

export const sum = (a, b) => {
    console.log('calling sum with', arguments);
    return a + b;
};

export const multiply = (a, b) => {
    console.warn('calling multiply with',
        arguments);
    return a * b;
};

export const divide = (a, b) => {
    console.error(`calling divide with ${ arguments }`);
    return a / b;
};

export const average = (a, b) => {
    console.log('calling average with ' + arguments);
    return divide(sum(a, b), 2);
};
