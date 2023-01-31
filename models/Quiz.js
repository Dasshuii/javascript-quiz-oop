// @ts-check
import { Question } from "./Question.js";

export class Quiz {

    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions questions' array
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} question found
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    isEnded() {
        return this.questions.length === this.questionIndex;
    }
    /**
     * 
     * @param {string} answer your guess
     */

    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }
}