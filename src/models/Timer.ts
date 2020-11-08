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
        var h = Math.floor(this.seconds / 3600);
        var m = Math.floor(this.seconds % 3600 / 60);
        var s = Math.floor(this.seconds % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

        return hDisplay + mDisplay + sDisplay; 
    }
}
