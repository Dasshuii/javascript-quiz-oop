
export class Question {

    /**
     * 
     * @param {string} text question's text
     * @param {string[]} choices question's choices 
     * @param {string} answer question's answer
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice your guess
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice) {
        return choice === this.answer;
    }
}

new Question()