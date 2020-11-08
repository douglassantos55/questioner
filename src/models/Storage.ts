export type RunParams = {
    topic: string;
    time: number;
    date: Date;
}

export default interface Storage {
    saveRun(params: RunParams): void;
}
