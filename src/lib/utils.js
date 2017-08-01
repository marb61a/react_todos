// The first ...args is a rest operator and the second is a spread operator
export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe);