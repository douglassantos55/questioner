export type RunParams = {
    topic: string;
    slug: string;
    time: number;
    date: Date;
}

export default interface Storage {
    getRuns(): RunParams[];
    saveRun(params: RunParams): void;
    getTopicRuns(topicName: string): RunParams[];
}
