import Storage, { RunParams } from "./Storage";

export default class LocalStorage implements Storage {
    getRuns(): RunParams[] {
        return JSON.parse(localStorage.getItem("runs") || "[]");
    }

    getTopicRuns(topicSlug: string): RunParams[] {
        return JSON.parse(localStorage.getItem(topicSlug) || "[]");
    }

    saveRun(params: RunParams): void {
        const existing: RunParams[] = this.getRuns();
        localStorage.setItem("runs", JSON.stringify([...existing, params]));

        const topicRuns: RunParams[] = this.getTopicRuns(params.slug);
        localStorage.setItem(params.slug, JSON.stringify([...topicRuns, params]));
    }
}
