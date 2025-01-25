// function createPopupElements() {
//     // Overlay element
//     const overlay = document.createElement('div');
//     overlay.id = 'overlay';
//     overlay.style.display = 'none';
//     overlay.style.position = 'fixed';
//     overlay.style.top = 0;
//     overlay.style.left = 0;
//     overlay.style.width = '100%';
//     overlay.style.height = '100%';
//     overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     overlay.style.zIndex = 9999;

//     // Popup menu element
//     const popupMenu = document.createElement('div');
//     popupMenu.id = 'popupMenu';
//     popupMenu.style.display = 'none';
//     popupMenu.style.position = 'fixed';
//     popupMenu.style.top = '50%';
//     popupMenu.style.left = '50%';
//     popupMenu.style.transform = 'translate(-50%, -50%)';
//     popupMenu.style.width = '300px';
//     popupMenu.style.padding = '20px';
//     popupMenu.style.backgroundColor = '#fff';
//     popupMenu.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
//     popupMenu.style.borderRadius = '8px';
//     popupMenu.style.textAlign = 'center';
//     popupMenu.style.zIndex = 10000;
  
//     // Popup title and input field
//     const popupTitle = document.createElement('h2');
//     popupTitle.textContent = 'Popup Menu';
//     const popupInput = document.createElement('input');
//     popupInput.type = 'text';
//     popupInput.placeholder = 'Enter the path here...';
//     popupInput.style.width = '100%';
//     popupInput.style.padding = '8px';
//     popupInput.style.marginTop = '10px';
//     popupInput.style.borderRadius = '4px';
//     popupInput.style.border = '1px solid #ccc';
//     popupInput.id = 'popupInput';  // ID for input focus and event listener

//     // Append title and input to popup
//     popupMenu.appendChild(popupTitle);
//     popupMenu.appendChild(popupInput);
//     document.body.appendChild(overlay);
//     document.body.appendChild(popupMenu);
// }

// // Show or hide popup and focus input on show
// function togglePopup(show) {
//     const popupMenu = document.getElementById('popupMenu');
//     const overlay = document.getElementById('overlay');
//     const popupInput = document.getElementById('popupInput');
  
//     if (show) {
//         popupMenu.style.display = 'block';
//         overlay.style.display = 'block';
//         popupInput.focus();  // Focus input for user typing
//     } else {
//         popupMenu.style.display = 'none';
//         overlay.style.display = 'none';
//     }
// }

// function initializePopupFeature() {
//     createPopupElements();

//     document.addEventListener('keydown', function(event) {
//         if (event.key === 'F3') {
//             event.preventDefault();
//             togglePopup(true);
//         } else if (event.key === 'Escape') {
//             togglePopup(false);
//         }
//     });

//     const contentInput = document.getElementById("popupInput");
//     if (contentInput) { // Ensure input exists
//         contentInput.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 const inputValue = event.target.value;
//                 handleSimulationProjects(inputValue);
//                 handleGameProjects(inputValue);
//                 handleQuiz(inputValue);
//                 handleCalculator(inputValue);
//                 handleDictionary(inputValue);
//                 handleAI(inputValue);
//                 handleHome(inputValue);
//             }
//         });
//     }
// }


// // Helper functions for redirecting based on input
// function handleSimulationProjects(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'simulation/carbon') window.location.href = 'carbon.html';
//         else if (inputValue === 'simulation/oxygen') window.location.href = 'oxygen.html';
//         else if (inputValue === 'simulation/hydrogen') window.location.href = 'hydrogen.html';
//         else if (inputValue === 'simulation/nitrogen') window.location.href = 'nytrogen.html';
//         else if (inputValue === 'simulation/solar') window.location.href = 'solar%20system.html';
//         else if (inputValue === 'simulation/object') window.location.href = 'object.html';
//         else if (inputValue === 'simulation/projectile') window.location.href = 'projectile.html';
//         else if (inputValue === 'simulation/slignshot') window.location.href = 'slignshot/slignshot.html';
//         else if (inputValue === 'simulation/chemistry') window.location.href = 'chemistry.html';
//     };
// };

// function handleGameProjects(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'game/scramble') window.location.href = 'scramble.html';
//         else if (inputValue === 'game/hangman') window.location.href = 'guessing.html';
//         else if (inputValue === 'game/typing') window.location.href = 'typing.html';
//     };
// };

// function handleQuiz(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'quiz') window.location.href = 'quizzes.html';
//     };
// };

// function handleCalculator(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'calculator') window.location.href = 'calculator.html';
//     };
// };

// function handleDictionary(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'dictionary') window.location.href = 'dictionary.html';
//     };
// };

// function handleAI(inputValue){
//     if (event.key === 'Enter') {
//         if (inputValue === 'ai/chatbot/with') window.location.href = 'withAPIchatbot.html';
//         else if (inputValue === 'ai/chatbot/without') window.location.href = 'withoutAPIchatbot.html';
//         else if (inputValue === 'ai/text2img') window.location.href = 'text2img.html';
//     };
// };

// function handleHome(inputValue) {
//     if (event.key === 'Enter') {
//         if (inputValue === 'home') window.location.href = 'main.html';
//     }
// }

// // Run initialization
// initializePopupFeature();


function createPopupElements() {
    // Overlay element
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    `;

    // Popup menu element
    const popupMenu = document.createElement('div');
    popupMenu.id = 'popupMenu';
    popupMenu.style.cssText = `
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        padding: 20px;
        background-color: #fff !important;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        text-align: center;
        z-index: 10000;
    `;

    // Popup title
    const popupTitle = document.createElement('h2');
    popupTitle.textContent = 'Popup Menu';
    popupTitle.style.cssText = `
        margin: 0 0 10px 0;
        font-family: Arial, sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    `;

    // Input field
    const popupInput = document.createElement('input');
    popupInput.type = 'text';
    popupInput.placeholder = 'Enter the path here...';
    popupInput.id = 'popupInput';
    popupInput.style.cssText = `
        width: 100% !important;
        padding: 10px !important;
        margin-top: 10px !important;
        border: 2px solid #ccc !important;
        border-radius: 5px !important;
        box-shadow: none !important;
        outline: none !important;
        font-size: 1rem !important;
        background-color: #fff !important;
        color: #333 !important;
        box-sizing: border-box !important;
    `;

    popupInput.addEventListener('focus', () => {
        popupInput.style.borderColor = '#FF5F5D';
    });
    popupInput.addEventListener('blur', () => {
        popupInput.style.borderColor = '#ccc';
    });

    // Append elements
    popupMenu.appendChild(popupTitle);
    popupMenu.appendChild(popupInput);
    document.body.appendChild(overlay);
    document.body.appendChild(popupMenu);
}


// Show or hide popup and focus input when displayed
function togglePopup(show) {
    const popupMenu = document.getElementById('popupMenu');
    const overlay = document.getElementById('overlay');
    const popupInput = document.getElementById('popupInput');

    if (show) {
        popupMenu.style.display = 'block';
        overlay.style.display = 'block';
        popupInput.focus();
    } else {
        popupMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Event listeners and initialization
function initializePopupFeature() {
    createPopupElements();

    document.addEventListener('keydown', function(event) {
        if (event.key === 'F3') {
            event.preventDefault();
            togglePopup(true);
        } else if (event.key === 'Escape') {
            togglePopup(false);
        }
    });

    const popupInput = document.getElementById("popupInput");
    popupInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const inputValue = event.target.value.trim();
            handleInputPaths(inputValue);
        }
    });
}

function handleInputPaths(inputValue) {
    const paths = {
        'simulation/carbon': 'carbon.html',
        'simulation/oxygen': 'oxygen.html',
        'simulation/hydrogen': 'hydrogen.html',
        'simulation/nitrogen': 'nytrogen.html',
        'simulation/solar': 'solar%20system.html',
        'simulation/object': 'object.html',
        'simulation/projectile': 'projectile.html',
        'simulation/slignshot': 'slignshot/slignshot.html',
        'simulation/chemistry': 'chemistry.html',
        'game/scramble': 'scramble.html',
        'game/hangman': 'guessing.html',
        'game/typing': 'typing.html',
        'quiz': 'quizzes.html',
        'math/calculator': 'calculator.html',
        'dictionary': 'dictionary.html',
        'ai/chatbot/with': 'withAPIchatbot.html',
        'ai/chatbot/without': 'withoutAPIchatbot.html',
        'ai/text2img': 'text2img.html',
        'math/math assistant' : 'math.html'
    };

    function handleOther(inputValue) {
        if (event.key === 'Enter') {
            if (inputValue === "home") {
                window.location.href = "../main.html";
            } else if (inputValue === 'simulation'){
                window.location.href = 'button.html'
            } else if (inputValue === 'game' || inputValue === 'games'){
                window.location.href = 'gamesbutton.html'
            } else if (inputValue === 'quiz'){
                window.location.href = 'quizzes.html'
            } else if (inputValue === 'calculator' || inputValue === 'equation solver'){
                window.location.href = 'calculator%20button.html'
            } else if (inputValue === 'dictionary'){
                window.location.href = 'dictionary.html'
            } else if (inputValue === 'ai'){
                window.location.href = 'chatbotbutton.html'
            };
        };
    };

    if (paths[inputValue]) {
        window.location.href = paths[inputValue];
    } else if (!paths[inputValue]) {
        handleOther(inputValue);
    } else {
        alert("Oops!! Invalid path");
    };
}

initializePopupFeature();
