let container = document.querySelector('.container');
let root = document.querySelector('#root');

class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.activeIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.activeIndex];
    }
    next() {
        // if (this.activeIndex >= this.quiz.length - 1) return;
        return this.activeIndex = this.activeIndex + 1;
    }
    prev() {
        // if (this.activeIndex <= 0) return;
        return this.activeIndex = this.activeIndex - 1;
    }
    render() {
        return this.getCurrentQuestion().render(container);
    }
}

class Question {
    constructor(title,option,correctAnswerIndex) {
        this.title = title,
        this.option = option,
        this.correctAnswerIndex = correctAnswerIndex
    }
    isCorrectAnswer(answer) {
        return this.correctAnswer.toLowerCase() === answer.toLowerCase();
    }
    getCorrectAnswer() {
        return this.option[this.correctAnswerIndex]
    }

    render() {
        container.innerText = "";
        let h1 = document.createElement('h1');
        h1.innerText = 'Quiz'
        let title = document.createElement('h2');
        title.innerText = this.title;
        let option = document.createElement('div');
        option.classList.add('option');
        this.option.forEach(element => {
            let a = document.createElement('a');
            a.innerText = element;
            a.setAttribute('href','#');

            option.append(a);
        });
        let control = document.createElement('div');
        control.classList.add('control')
        let next = document.createElement('a');
        next.innerText = "Next"
        let prev = document.createElement('a');
        prev.innerText = 'Previous'
        control.append(next,prev);

        container.append(h1,title,option,control);
        next.addEventListener('click',()=> {
            quiz.next();
            quiz.render();
        });
        prev.addEventListener('click',()=> {
            quiz.prev();
            quiz.render();
        });
        option.addEventListener("click", (event) => {
            answerShowcase(event, option, this);
        });
    }
}


let question1 = new Question(`Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?`,[`alertbox(“GeeksforGeeks”);`,`msg(“GeeksforGeeks”);`,`msgbox(“GeeksforGeeks”);`,`alert(“GeeksforGeeks”);`],3);

let question2 = new Question(`The external JavaScript file must contain <script> tag.`,[`True`,`False`],1);

let quiz = new Quiz([question1,question2]);

quiz.render();

function answerShowcase(event, option, obj) {
    event.preventDefault();
    if (event.target.tagName == "A") {
        if(event.target.innerText === obj.getCorrectAnswer()) {
            event.target.classList.add('correct');
        }else {
            event.target.classList.add('wrong');
            option.children[obj.correctAnswerIndex].classList.add('correct');  
        }
    }
}

