// The first ...args is a rest operator and the second is a spread operator
export const partial = (fn, ...args) => fn.bind(null, ...args);

export const pipe = (f, g) => (...args) => {
    
};

