// The first ...args is a rest operator and the second is a spread operator
export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args));

// Takes in the old pipe function as it will allow more than 2 functions
export const pipe = (...fns) => fns.reduce(_pipe);