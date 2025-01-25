const contentInput = document.querySelector(".search-box input");
const weatherInput = document.querySelector(".weather-box input");

function handleSimulationProjects(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'simulation/carbon'){
            window.location.href = 'carbon.html';
        } else if (inputValue === 'simulation/oxygen'){
            window.location.href = 'oxygen.html';
        } else if (inputValue === 'simulation/hydrogen'){
            window.location.href = 'hydrogen.html';
        } else if (inputValue === 'simulation/nitrogen'){
            window.location.href = 'nytrogen.html';
        } else if (inputValue === 'simulation/solar'){
            window.location.href = 'solar%20system.html';
        } else if (inputValue === 'simulation/object'){
            window.location.href = 'object.html';
        } else if (inputValue === 'simulation/projectile'){
            window.location.href = 'projectile.html';
        } else if (inputValue === 'simulation/slignshot'){
            window.location.href = 'slignshot/slignshot.html';
        } else if (inputValue === 'simulation/chemistry'){
            window.location.href = 'chemistry.html';
        };
    };
};

function handleGameProjects(inputValue){
    if (event.key === 'Enter') {
        if (inputValue === 'game/scramble'){
            window.location.href = 'scramble.html';
        } else if(inputValue === 'game/hangman'){
            window.location.href = 'guessing.html';
        } else if(inputValue === 'game/typing'){
            window.location.href = 'typing.html';
        };
    };
};

function handleQuiz(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'quiz'){
            window.location.href = 'quizzes.html'
        };
    };
};

function handleCalculator(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'calculator'){
            window.location.href = 'calculator.html'
        };
    };
};

function handleDictionary(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'dictionary'){
            window.location.href = 'dictionary.html'
        };
    };
};

function handleAI(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'ai/chatbot/without'){
            window.location.href = 'withoutAPIchatbot.html'
        } else if (inputValue === 'ai/chatbot/with'){
            window.location.href = 'withAPIchatbot.html'
        } else if (inputValue === 'ai/text2img'){
            window.location.href = 'text2img.html'
        };
    };
};

function handleOther(inputValue) {
    if (event.key === 'Enter') {
        if (inputValue === 'simulation'){
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

document.addEventListener('keypress', function(event) {
    if (event.key === '/') {
        event.preventDefault();
        contentInput.focus();
        if (!contentInput.value) {
            contentInput.value = '';
        } else { contentInput.value = contentInput.value + '/' };
    };
});

contentInput.addEventListener('keypress', function(event) {
    const inputValue = event.target.value;
    if (event.key === "Enter") {
        try {
            handleSimulationProjects(inputValue);
            handleGameProjects(inputValue);
            handleQuiz(inputValue);
            handleCalculator(inputValue);
            handleDictionary(inputValue);
            handleAI(inputValue);
            handleOther(inputValue);
        } catch (error) {
            alert(error);
        } finally {
            contentInput.value = "";
        };
    };
});

weatherInput.addEventListener('keypress', function(event) {
    const weatherValue = event.target.value;
    if (event.key === "Enter") {
        try {
            event.preventDefault();
            const inputValue = event.target.value;
            window.location.href = `weather.html?weatherInfo=${encodeURIComponent(inputValue)}`;
        } catch(error) {
            alert(error);
        } finally {
            weatherInput.value = "";
        };
    };
});