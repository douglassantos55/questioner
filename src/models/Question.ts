export default class Question {
    private text: string;
    private answer: string;

    constructor(text: string, answer: string) {
        this.text = text;
        this.answer = answer;
    }

    getText(): string {
        return this.text;
    } 

    getAnswer(): string {
        return this.answer;
    }
}
