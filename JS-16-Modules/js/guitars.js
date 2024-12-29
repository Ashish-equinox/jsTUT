export default function playGuitar(){
    return "playing guitar!";
};

export const shredding = ()=>{
    return "Shredding some licks!";
};

export const plucking = ()=>{
    return "plucking the strings...";
};

// Notes:-

// 1) "playGuitar" is likely considered the main function of this module, serving as the primary feature or entry point. Using a default export makes it straightforward for other modules to import this primary functionality without worrying about naming

// 2) Named exports allow you to export multiple values from a module. These can be additional utilities, helper functions, or other components that complement the default export.

// 3) a module can have only 1 default export and multiple named exports
