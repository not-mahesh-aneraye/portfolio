document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");
    const gamePopup = document.getElementById("game-popup");
    const numberPopup = document.getElementById("number-popup");
    const triviaPopup = document.getElementById("trivia-popup");

    const gameInput = document.getElementById("game-input");
    const gameSubmit = document.getElementById("game-submit");
    const numberInput = document.getElementById("number-input");
    const numberSubmit = document.getElementById("number-submit");
    const triviaInput = document.getElementById("trivia-input");
    const triviaSubmit = document.getElementById("trivia-submit");

    // Focus the input field on page load
    inputField.focus();

    // Display 'Type help for available commands' message on load
    const welcomeMessage = document.createElement("p");
    welcomeMessage.classList.add("output");
    welcomeMessage.textContent = "Type 'help' for available commands";
    terminalBody.insertBefore(welcomeMessage, document.querySelector('.input-line'));

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
            processCommand(inputValue);
            inputField.value = "";
        }
    });

    function processCommand(command) {
        const commandLine = document.createElement("p");
        commandLine.classList.add("command-line");
        commandLine.innerHTML = `<span class="prompt">Mahesh@Portfolio:~$</span> <span class="command-text">${command}</span>`;
        terminalBody.insertBefore(commandLine, document.querySelector('.input-line'));

        const output = document.createElement("p");
        output.classList.add("output");

        if (command.toLowerCase().startsWith('skills/')) {
            const skillName = command.split('/')[1];
            output.innerHTML = showSkill(skillName.toLowerCase());
        } else {
            switch (command.toLowerCase()) {
                case 'help':
                    output.innerHTML = showHelp();
                    break;
                case 'about':
                    output.innerHTML = showAbout();
                    break;
                case 'projects':
                    output.innerHTML = showProjects();
                    break;
                case 'skills':
                    output.innerHTML = showSkills();
                    break;
                case 'contact':
                    output.innerHTML = showContact();
                    break;
                case 'clear':
                    clearTerminal();
                    return; // Exit early as clearTerminal does not need further processing
                case 'experience':
                    output.innerHTML = showExperience();
                    break;
                case 'education':
                    output.innerHTML = showEducation();
                    break;
                case 'games':
                    output.innerHTML = showGames();
                    break;
                case 'rock-paper-scissors':
                    showRockPaperScissors();
                    return; // Exit early as we show the game popup
                case 'guess-the-number':
                    showNumberGuess();
                    return; // Exit early as we show the game popup
                case 'trivia-quiz':
                    showTriviaQuiz();
                    return; // Exit early as we show the game popup
                case 'sudo -i':
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                    return; // Exit early as we open a new tab
                default:
                    output.innerHTML = showError(command);
            }
        }

        terminalBody.insertBefore(output, document.querySelector('.input-line'));
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function clearTerminal() {
        // Clear all output elements and command lines
        const outputs = terminalBody.querySelectorAll(".output, .command-line");
        outputs.forEach(output => output.remove());

        // Ensure the input line remains visible
        const inputLine = document.querySelector('.input-line');
        terminalBody.appendChild(inputLine);

        // Refocus on the input field
        inputField.focus();
    }

    function showHelp() {
        return `Available commands:<br><br>` +
        `- about<br>` +
        `- projects<br>` +
        `- skills<br>` +
        `- contact<br>` +
        `- experience<br>` +
        `- education<br>` +
        `- games <br>` +
        `- clear<br>` +
        `- sudo -i (WARNING: Do Not Execute this Command It Will mess with your system)<br>`;
    }

    function showAbout() {
        return "I'm Mahesh, a DevOps engineer with a passion for coding and problem-solving.";
    }

    function showProjects() {
        return `Projects:<br><br>` +
               `1. ChatBuddy - A web application for messaging using Django.<br>` +
               `2. AWS Deployment using Terraform - Automates AWS services deployment.`;
    }

    function showSkills() {
        const skills = [
            'Docker',
            'Kubernetes',
            'Ansible',
            'Linux',
            'Git',
            'Terraform',
            'AWS',
            'Jenkins',
            'Python',
            'Bash',
            'CI',
            'CD'
        ];

        return `Available skills:(HINT:- Type Skills/Skills-name)<br><br>` + skills.map(skill => `- ${skill}`).join('<br>');
    }

    function showSkill(skill) {
        const skills = {
            docker: 'Docker: Platform for developing, shipping, and running applications.',
            kubernetes: 'Kubernetes: Open-source system for automating deployment, scaling, and management of containerized applications.',
            ansible: 'Ansible: Open-source automation tool for IT tasks like configuration management and application deployment.',
            linux: 'Linux: Open-source operating system.',
            git: 'Git: Version control system for tracking changes in source code.',
            terraform: 'Terraform: Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.',
            aws: 'AWS: Cloud computing services provided by Amazon.',
            jenkins: 'Jenkins: Open-source automation server for continuous integration and delivery.',
            python: 'Python: High-level programming language known for its readability and versatility.',
            bash: 'Bash: Unix shell and command language for scripting.',
            ci: 'CI: Continuous Integration process for automating software development workflows.',
            cd: 'CD: Continuous Delivery process for automating software deployment workflows.',
        };

        if (skills[skill]) {
            return `<img src="images/${skill}.png" alt="${skill}" class="skill-logo"><br>${skills[skill]}`;
        } else {
            return `No information available for skill: ${skill}`;
        }
    }

    function showContact() {
        return `Contact me at: <a href="mailto:your.email@example.com">your.email@example.com</a>`;
    }

    function showExperience() {
        return `Experience:<br><br>` +
               `- DevOps Engineer at Company XYZ<br>` +
               `- Previously worked on various projects involving cloud infrastructure and automation.`;
    }

    function showEducation() {
        return `Education:<br><br>` +
               `- Bachelor’s degree in Computer Science.<br>` +
               `- Various certifications in cloud technologies and DevOps practices.`;
    }

    function showGames() {
        return `Available games:(HINT:- Type game-name to play game. )<br><br>` +
               `- Rock-Paper-Scissors<br>` +
               `- Guess-the-Number<br>` +
               `- Trivia-Quiz`;
    }

    function showError(command) {
        return `Error: Command '${command}' not recognized.`;
    }

    function showRockPaperScissors() {
        gamePopup.style.display = 'block';
        gamePopup.classList.add('game-popup');
        gameInput.focus();
        gameInput.value = '';

        // Ensure event listener is added only once
        gameSubmit.removeEventListener("click", processRockPaperScissors);
        gameInput.removeEventListener("keypress", handleGameInputKeyPress);
        gameSubmit.addEventListener("click", processRockPaperScissors);
        gameInput.addEventListener("keypress", handleGameInputKeyPress);
    }

    function handleGameInputKeyPress(event) {
        if (event.key === "Enter") {
            processRockPaperScissors();
        }
    }

    function processRockPaperScissors() {
        const userChoice = gameInput.value.trim().toLowerCase();
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (choices.includes(userChoice)) {
            if (userChoice === computerChoice) {
                result = 'It\'s a tie!';
            } else if (
                (userChoice === 'rock' && computerChoice === 'scissors') ||
                (userChoice === 'paper' && computerChoice === 'rock') ||
                (userChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = 'You win!';
            } else {
                result = 'Computer wins!';
            }
        } else {
            result = 'Invalid choice. Please choose rock, paper, or scissors.';
        }

        const output = document.createElement("p");
        output.classList.add("output");
        output.innerHTML = `Rock-Paper-Scissors:<br>Your choice: ${userChoice}<br>Computer's choice: ${computerChoice}<br>${result}`;
        terminalBody.insertBefore(output, document.querySelector('.input-line'));
        gamePopup.style.display = 'none';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function showNumberGuess() {
        numberPopup.style.display = 'block';
        numberPopup.classList.add('game-popup');
        numberInput.focus();
        numberInput.value = '';

        // Ensure event listener is added only once
        numberSubmit.removeEventListener("click", processNumberGuess);
        numberInput.removeEventListener("keypress", handleNumberInputKeyPress);
        numberSubmit.addEventListener("click", processNumberGuess);
        numberInput.addEventListener("keypress", handleNumberInputKeyPress);
    }

    function handleNumberInputKeyPress(event) {
        if (event.key === "Enter") {
            processNumberGuess();
        }
    }

    function processNumberGuess() {
        const userGuess = parseInt(numberInput.value.trim());
        const randomNumber = Math.floor(Math.random() * 20) + 1; // Range 1-20
        let result = '';

        if (!isNaN(userGuess)) {
            if (userGuess === randomNumber) {
                result = 'Congratulations! You guessed the correct number!';
            } else {
                result = `Sorry, the correct number was ${randomNumber}.`;
            }
        } else {
            result = 'Please enter a valid number between 1 and 20.';
        }

        const output = document.createElement("p");
        output.classList.add("output");
        output.innerHTML = `Guess the Number:<br>Your guess: ${userGuess}<br>${result}`;
        terminalBody.insertBefore(output, document.querySelector('.input-line'));
        numberPopup.style.display = 'none';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function showTriviaQuiz() {
        triviaPopup.style.display = 'block';
        triviaPopup.classList.add('game-popup');
        triviaInput.focus();
        triviaInput.value = '';

        // Ensure event listener is added only once
        triviaSubmit.removeEventListener("click", processTriviaQuiz);
        triviaInput.removeEventListener("keypress", handleTriviaInputKeyPress);
        triviaSubmit.addEventListener("click", processTriviaQuiz);
        triviaInput.addEventListener("keypress", handleTriviaInputKeyPress);
    }

    function handleTriviaInputKeyPress(event) {
        if (event.key === "Enter") {
            processTriviaQuiz();
        }
    }

    function processTriviaQuiz() {
        const userAnswer = triviaInput.value.trim().toLowerCase();
        const correctAnswer = 'paris'; // Example correct answer for a trivia question
        let result = '';

        if (userAnswer === correctAnswer) {
            result = 'Correct! Well done!';
        } else {
            result = 'Incorrect. The correct answer was paris.';
        }

        const output = document.createElement("p");
        output.classList.add("output");
        output.innerHTML = `Trivia Quiz:<br>Your answer: ${userAnswer}<br>${result}`;
        terminalBody.insertBefore(output, document.querySelector('.input-line'));
        triviaPopup.style.display = 'none';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
