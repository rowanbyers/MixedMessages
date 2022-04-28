// Import prompts
import prompts from "./src/prompts.js";
import myPrompts from "./src/myPrompts.mjs";

// Helper function (object)
const getObject = () => {
    // combine prompts and myPrompts
    const promptObj = prompts.objects
    const myPromptObj = myPrompts.objects
    const allPromptObjects = promptObj.concat(myPromptObj);
    // create random ID not exceeding length of new array
    const id = Math.floor(Math.random() * allPromptObjects.length);
    // Use ID to pick item from array
    const newObject = allPromptObjects[id];
    // Return item
    return newObject;
}

// Helper function (action)
const getAction = () => {
    // Combine prompts and myPrompts
    const promptAct = prompts.actions
    const myPromptAct = myPrompts.actions
    const allPromptActions = promptAct.concat(myPromptAct);
    // Create random ID not exceeding length of new array
    const id = Math.floor(Math.random() * allPromptActions.length);
    // Use ID to pick item from array
    const newAction = allPromptActions[id];
    // Return item
    return newAction
}

// Helper function (puctuation)
const getPunctuation = () => {
    // Create random ID not exceeding length of the array
    const id = Math.floor(Math.random() * prompts.punctuation.length);
    // Use ID to pick item from array
    const newPunct = prompts.punctuation[id];
    // Return item
    return newPunct;
}

// Higer-Order function
const makeHeadline = () => {
    // Generate
    let headline = getObject() + ' ' + getAction() + ' ' + getObject() + getPunctuation();
    headline = headline.toUpperCase();
    // Return
    console.log(headline);
    return headline;
}

// Event Listener
const button = document.getElementById('genButton');
const headline = document.getElementById('headline');
button.onclick = () => {
    headline.innerText = makeHeadline();
};