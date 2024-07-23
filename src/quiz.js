class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        this.questions.sort(function(a, b){
            return 0.5 - Math.random()
        });
    }

    checkAnswer(answer) {
        if (answer === this.getQuestion().answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex >= this.questions.length) {
            return true;
        }

        else return false;
    }

    filterQuestionsByDifficulty(difficulty) {
            
        if (difficulty >= 1 && difficulty <= 3){
            
            this.questions = this.questions.filter(function (question) {
                return question.difficulty === difficulty;
            });
        }
    }

    averageDifficulty() {
        const sum = this.questions.reduce(function (acc, question){
            return acc + question.difficulty;
        }, 0) 
        return sum / this.questions.length;
    }
}

