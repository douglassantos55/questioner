import Topic from "./Topic";

export default class Source {
    private name: string;
    private topics: Topic[] = [];

    constructor(name: string, topics: Topic[]) {
        this.name = name;
        this.topics = topics;
    }

    getName(): string {
        return this.name;
    }

    getTopics(): Topic[] {
        return this.topics;
    }

    countTopics(): number {
        return this.topics.length;
    }
}
