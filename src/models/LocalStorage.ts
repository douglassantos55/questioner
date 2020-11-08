import Storage, { RunParams } from "./Storage";

export default class LocalStorage implements Storage {
    getRuns(): RunParams[] {
        return JSON.parse(localStorage.getItem("runs") || "[]");
    }

    saveRun(params: RunParams): void {
        const existing: RunParams[] = this.getRuns();
        localStorage.setItem("runs", JSON.stringify([...existing, params]));
    }
}
