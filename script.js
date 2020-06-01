//Pseudo code

    //Main screen that has name of game and instructions
        //High score link on top left ---- goes to high score page
        //Timer on top right
        //Start button activating game onClick

    //Open set of questions and start timer when 'Start' is pressed
        //Question pops up with series of multiple choice answers
        //OnClick, pop-up alert if answer is correct or wrong
            //If wrong, correct answer is shown and extra time is taken off the timer
                //Add another button to continue to next question after the player is able to fully read why their answer was wrong
        //Repeat process for remaining questions

    //After final question, final page saying game has completed and shows the final score
        //Input area to enter initials affiliated with the score
        //Submit button that goes to localStorage
    
        //Final page that lists all high scores
            //Lists all high scores in order (???)
            //Button to go back and restart the game
            //Button to clear all high scores
        //NO TIMER IN CORNER OF LAST PAGE
        //NO HIGH SCORE IN CORNER OF LAST PAGE


        //responsive code for resizing of page.
        //credit: https://www.creativebloq.com/javascript/expert-guide-making-your-javascript-responsive-71412226

        var mql = window.matchMedia("screen and (maxwidth: 768px)");
        var timer = document.getElementById('timer');
        var secondsLeft = 60;
    
        var startBtn = document.getElementById('startBtn');
        var openingText = document.getElementById('openingText');
        var questionsPage = document.getElementById('questionsPage');
        var questionText = document.getElementById('questionText');
        var answerBtns = document.getElementById('answerBtns');

        let shuffleQ, questionsIndex

        var questions = [
            { 
                question: 'What tag does Javascript have to be wrapped in if written in HTML??',
                answers: [ 
                    {text: '<p>   </p>', correct: false},
                    {text: '<script>   </script>', correct: true},
                    {text: '<span>   </span>', correct: false},
                    {text: '<div>   </div>', correct: false}
                ]
            }

        ]


        startBtn.addEventListener('click', start);

        function start() {
            startBtn.classList.add('hide');
            openingText.classList.add('hide');
            timer.classList.remove('hide');
            questionsPage.classList.remove('hide');
            shuffleQ = questions.sort(() => Math.random() - .5); 
            questionsIndex = 0;
            nextQ()
        }

        function nextQ() {
            resetForm()
            displayNextQ(shuffleQ[questionsIndex])             
        }

        function displayNextQ(question) {
            questionText.innerText = question.question;
            question.answers.forEach(answer => {
                var button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('ansBtn');
                if (answer.correct) {
                    button.dataset.correct = answer.correct
                }
                button.addEventListener('click', answer);
                answerBtns.appendChild(button);
            })
        }

        function resetForm() {
            while (answerBtns.firstChild) {
                answerBtns.removeChild(answerBtns.firstChild)
            }
        }

        function answerFunc(e) {
            var chosenBtn = e.target;
            var correct = chosenBtn.dataset.correct;
            setStatusClass(document.body, correct);
            Array.from(answerBtns.children).forEach(button => {
                setStatusClass(button, button.dataset.correct);
            })
        }

        function setStatusClass(element, correct) {
            clearStatusClass(element);
            if (correct) {
                element.classlist.add('btnCorrect');
            } else {
                element.classList.add('btnWrong');
            }
        }

        function clearStatusClass(element) {
            element.classList.remove('btnCorrect');
            element.classList.remove('btnWrong');
        }


        //Timer functions
        //Make it start onClick
        function setTime() {
            var timeVal = setInterval(function() {
                secondsLeft--;
                timer.textContent = 'Timer: ' + secondsLeft;
                if(secondsLeft === 0) {
                    clearInterval(timeVal);
                    sendMessage();
                }
            }, 1000);
        }

        //not working???
        function sendMessage() {
            timer.textContent = '';
            alert = ("Your time is up!");
        }
        setTime();



    //Formatting for responsive page
        // mql.addListener(function(e){
        // if(e.matches){
        //     console.log('enter mobile');
        // }
        // else{
        //     console.log('leave mobile');
        // }
        // });





                    // question: 'Besides CSS, what is another way to style and alter your Javascript?',
                    // answers: [ 
                    // {text: 'Asking the computer nicely', correct: false},
                    // {text: 'Media Queries', correct: true},
                    // {text: 'Magic', correct: false},
                    // {text: 'Using the Force', correct: false}


                    // question: 'What is the correct syntax of a for loop?',
                    // answers: [ 
                    // {text: 'for {} ()', correct: false},
                    // {text: 'for () {}', correct: true},
                    // {text: '() for {}', correct: false},
                    // {text: '{} () for', correct: false}


                    // question: 'How do you log something in the console?',
                    // answers: [ 
                    // {text: 'log.console', correct: false},
                    // {text: 'console.log', correct: true},
                    // {text: 'display.in.console', correct: false},
                    // {text: 'show.me.the.money', correct: false}


                    // question: 'What does || represent?',
                    // answers: [ 
                    // {text: 'if/else statements', correct: false},
                    // {text: 'or', correct: true},
                    // {text: 'and', correct: false},
                    // {text: 'omit', correct: false}

                    // question: 'What does [] represent?',
                    // answers: [ 
                    // {text: 'A ray gun', correct: false},
                    // {text: 'An array', correct: true},
                    // {text: 'A loop', correct: false},
                    // {text: 'A stingray', correct: false}


                    // question: 'What is the code for a random number?',
                    // answers: [ 
                    // {text: 'Roll dice', correct: false},
                    // {text: 'Math.random', correct: true},
                    // {text: 'Close your eyes and hit a key and hope it is a number', correct: false},
                    // {text: 'random.number', correct: false}


                    // question: 'What is the extension for a Javascript file?',
                    // answers: [ 
                    // {text: '.java.script', correct: false},
                    // {text: '.js', correct: true},
                    // {text: '.java', correct: false},
                    // {text: '.script', correct: false}


                    // question: 'What code do you use to detect clicks, mousemoves, etc.?',
                    // answers: [ 
                    // {text: 'movementDetector', correct: false},
                    // {text: 'eventListener', correct: true},
                    // {text: 'activityDetector', correct: false},
                    // {text: 'screenRecorder', correct: false}

                    // question: 'What is the DOM?',
                    // answers: [ 
                    // {text: 'A HOF baseball player', correct: false},
                    // {text: 'Document Object Model', correct: true},
                    // {text: 'A dinosaur', correct: false},
                    // {text: 'A database', correct: false}

