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
                case 'certifications':
                    output.innerHTML = showCertifications();
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
        return `Available commands: (HINT:- Type command-names like about.)<br><br>` +
        `- about<br>` +
        `- projects<br>` +
        `- skills<br>` +
        `- contact<br>` +
        `- experience<br>` +
        `- education<br>` +
        `- certifications<br>` + 
        `- games <br>` +
        `- clear<br>` +
        `- sudo -i (WARNING: Do Not Execute this Command It Will mess with your system)<br>`;
    }

    function showAbout() {
        return "I'm Mahesh, a DevOps engineer. Specialize in building robust CI/CD pipelines, automating workflows, and optimizing cloud-based deployments.";
    }

    function showProjects() {
        return `Projects:<br><br>` +
               `- AWS Deployment using Terraform <br><br>- This project utilizes Terraform to automate the deployment of key AWS services, ensuring consistent and efficient infrastructure setup. The automation script manages the creation of a Virtual Private Cloud (VPC) along with essential components such as an Internet Gateway, Route Table, and Subnets. It also automates the deployment of EC2 instances within the VPC, enabling scalable and secure cloud environments. By defining infrastructure as code, the project enhances reliability, scalability, and repeatability while reducing manual effort. <br><br>` +
               `- ChatBuddy <br><br>- This web application, developed with Django, HTML, and CSS, offers a streamlined and intuitive platform for real-time messaging. It prioritizes user experience with key features such as user authentication, secure message handling, and a responsive design for cross-device usability. The Django backend ensures efficient data management, while the clean front-end interface enhances accessibility and simplicity. <br><br>`;
    }

    function showSkills() {
        const skills = [
            'Linux',
            'AWS',
            'Docker',
            'Kubernetes',
            'Jenkins',
            'Ansible',
            'Terraform',
            'Python',
            'Bash',
            'Git',
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
        return `Contact me at: <a href="mailto:maheshaneraye@gmail.com">maheshaneraye@gmail.com</a>`;
    }

    function showExperience() {
        return `Experience:<br><br>` +
               `- Project at Oasis Infobyte<br><br>` +
               `- As a Project Intern, I developed and deployed a web application using the Django framework, REST, HTML, CSS, and AWS EC2. I deployed and maintained Linux servers on AWS, implementing automation solutions that increased productivity by 15%. Additionally, I analyzed and resolved server issues, ensuring smooth application performance and reliability.<br><br>`;
    }

    function showEducation() {
        return `Education:<br><br>` +
               `- Bachelor’s degree in Computer Science.<br>` +
               `- Various certifications in cloud technologies and DevOps practices.<br><br>`;
    }

    function showCertifications() {
        return `Certifications and Badges:<br><br>` +
               `Credly Badges <a href="https://www.credly.com/users/mahesh-aneraye" target="_blank">Here</a><br>` +
               `Ultimate AWS Certified Cloud Practitioner - Udemy <a href="https://www.udemy.com/certificate/UC-4c4b99e9-fa82-45a2-83e4-ef54f9eb189a/" target="_blank">Here</a><br>` +
               `Scientific Computing with Python - freeCodeCamp <a href="https://www.freecodecamp.org/certification/Mahesh_Aneraye/scientific-computing-with-python-v7" target="_blank">Here</a><br>`;
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

        const result = determineRPSWinner(userChoice, computerChoice);

        gamePopup.style.display = 'none';

        const gameResult = document.createElement("p");
        gameResult.classList.add("output");
        gameResult.innerHTML = `You chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>${result}`;

        terminalBody.insertBefore(gameResult, document.querySelector('.input-line'));
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function determineRPSWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
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
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        const result = (userGuess === randomNumber) ? "Correct! You guessed the number!" : `Wrong! The correct number was ${randomNumber}.`;

        numberPopup.style.display = 'none';

        const numberResult = document.createElement("p");
        numberResult.classList.add("output");
        numberResult.innerHTML = result;

        terminalBody.insertBefore(numberResult, document.querySelector('.input-line'));
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
        const correctAnswer = 'canada'; // Example trivia answer

        const result = (userAnswer === correctAnswer) ? "Correct! You know your trivia!" : `Wrong! The correct answer was ${correctAnswer}.`;

        triviaPopup.style.display = 'none';

        const triviaResult = document.createElement("p");
        triviaResult.classList.add("output");
        triviaResult.innerHTML = result;

        terminalBody.insertBefore(triviaResult, document.querySelector('.input-line'));
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
