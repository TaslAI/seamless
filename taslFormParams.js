// Select the node that will be observed for mutations
const targetNode = document.body; // The body tag is a safe bet, but you may need to be more specific

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            let labelElement = document.getElementById('112036845');
            if (labelElement) {
                labelElement.textContent = 'Your New Text Here'; // Replace with your desired text
                observer.disconnect(); // Stop observing after the element has been modified
                break; // Exit the loop after the element has been found and modified
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
