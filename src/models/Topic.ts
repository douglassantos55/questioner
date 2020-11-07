import Question from "./Question";

export default class Topic {
    private name: string;
    private selected: number[] = [];
    private questions: Question[] = [];

    constructor(name: string, questions: Question[]) {
        this.name = name;
        this.questions = questions;
    }

    getName(): string {
        return this.name;
    }

    getSlug(): string {
        return this.name.replace(/[^a-zA-Z]/, "-").toLowerCase();
    }

    reset() {
        this.selected = [];
    }

    getRandomQuestion(): Question | null {
        if (this.selected.length === this.questions.length) {
            return null;
        }

        let index;

        while (index === undefined || this.selected.includes(index)) {
            index = Math.floor(Math.random() * this.questions.length);
        } 

        this.selected.push(index);
        return this.questions[index];
    }

    getQuestions(): Question[] {
        return this.questions;
    }

    countQuestions(): number {
        return this.questions.length;
    }
}
