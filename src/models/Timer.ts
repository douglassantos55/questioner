import { formatTime } from "../format";

export default class Timer {
    private interval: number;
    private seconds: number;

    constructor() {
        this.interval = 0;
        this.seconds = 0;
    }

    start() {
        this.interval = window.setInterval(() => this.seconds++, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    getTime(): number {
        return this.seconds;
    }

    getTimeString(): string {
        return formatTime(this.seconds);
    }
}
