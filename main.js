// Importing prompts
import prompts from "./src/prompts.js";


// helper function
const getObject = () => {
    // generate array ID that is random and won't exceed the length of the array

    const id = Math.floor(Math.random() * prompts.objects.length);
    
    // pickup an array element with the random id
    const newObject = prompts.objects[id];
    
    // output the element
    return newObject;
    
}

// helper function
const getAction = () => {
    // generate array ID that is random and won't exceed the length of the array
    const id = Math.floor(Math.random() * prompts.actions.length);

    // pickup an array element with the random id
    const newAction = prompts.actions[id];

    // output the element
    return newAction;
}

// helper function
const getPunctuation = () => {
    // generate array ID that is random and won't exceed the length of the array
    const id = Math.floor(Math.random() * prompts.punctuation.length);

    // pickup an array element with the random id
    const newPunct = prompts.punctuation[id];

    // output the element
    return newPunct;
}

// higher-order function
const makeHeadline = () => {
    // generate
    let headline = getObject() + ' ' + getAction() + ' ' + getObject() + getPunctuation();
    headline = headline.toUpperCase();

    // output
    console.log(headline);
    return headline;
}

// event listener
const button = document.getElementById('genButton');
const headline = document.getElementById('headline');
button.onclick = () => {
    headline.innerText = makeHeadline();
};